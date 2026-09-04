import { useState } from 'react'
import './PasswordGate.css'

/* SHA-256 of the guest password. Hashed rather than inline so the word itself
   isn't sitting in the JS bundle for anyone who opens view-source. This is a
   politeness gate, not real security — see README. */
const PASSWORD_HASH =
  '020b30c8dd04b080819f26dc40f5d530aa2a0a9482cc17a7ce9bba3b28406280'

const STORAGE_KEY = 'mirdad-unlocked'

async function hash(text) {
  const bytes = new TextEncoder().encode(text)
  const digest = await crypto.subtle.digest('SHA-256', bytes)
  return [...new Uint8Array(digest)]
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

function PasswordGate({ children }) {
  // Read straight out of storage on the first render, so an already-unlocked
  // guest never sees the gate flash up before the site appears.
  const [unlocked, setUnlocked] = useState(
    () => localStorage.getItem(STORAGE_KEY) === PASSWORD_HASH,
  )
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    const attempt = await hash(value.trim().toLowerCase())
    if (attempt === PASSWORD_HASH) {
      localStorage.setItem(STORAGE_KEY, PASSWORD_HASH)
      setUnlocked(true)
    } else {
      setError(true)
      setValue('')
    }
  }

  if (unlocked) return children

  return (
    <div className="gate">
      <div className="gate__card">
        <p className="gate__eyebrow">Anna &amp; Michael</p>
        <h1 className="gate__title">You&apos;re invited</h1>
        <p className="gate__hint">
          Pop in the password from your invitation to see the details.
        </p>

        <form className="gate__form" onSubmit={handleSubmit}>
          <label className="gate__label" htmlFor="gate-password">
            Password
          </label>
          <input
            id="gate-password"
            type="password"
            value={value}
            autoFocus
            autoComplete="off"
            aria-invalid={error}
            aria-describedby={error ? 'gate-error' : undefined}
            onChange={(e) => {
              setValue(e.target.value)
              setError(false)
            }}
          />
          {error && (
            <p className="gate__error" id="gate-error" role="alert">
              That&apos;s not quite it — have another go.
            </p>
          )}
          <button className="gate__button" type="submit">
            Come on in
          </button>
        </form>

        <p className="gate__heart" aria-hidden="true">&#9825;</p>
      </div>
    </div>
  )
}

export default PasswordGate
