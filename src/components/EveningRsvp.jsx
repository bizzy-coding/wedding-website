import { useState } from 'react'
import './Rsvp.css'

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyaOyDfAuHX2uqmbu_lE376957c3RIZFsTMXuCWppSK1j_LqAEJLEud85tYCajm67Lw/exec'

export default function EveningRsvp() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
  })
  const [status, setStatus] = useState('idle')

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    const payload = { ...form, guestType: 'evening' }

    if (!GOOGLE_SCRIPT_URL) {
      setTimeout(() => setStatus('success'), 1000)
      return
    }

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="evening-rsvp">
        <div className="rsvp__success">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="28" cy="28" r="24" />
            <path d="M18 28l7 7 13-13" />
          </svg>
          <h2 className="section-heading">Thank You!</h2>
          <p>We&rsquo;ve received your RSVP. See you in the evening!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="evening-rsvp">
      <div className="evening-rsvp__card">
        <h1 className="evening-rsvp__logo">A & M</h1>
        <h2 className="section-heading">Evening RSVP</h2>
        <p className="evening-rsvp__intro">
          We&rsquo;d love for you to join us for the evening celebration!
        </p>

        <form className="rsvp__form" onSubmit={handleSubmit}>
          <div className="rsvp__field">
            <input
              name="firstName" type="text" required
              value={form.firstName} onChange={handleChange}
              placeholder="FIRST NAME"
            />
          </div>

          <div className="rsvp__field">
            <input
              name="lastName" type="text" required
              value={form.lastName} onChange={handleChange}
              placeholder="LAST NAME"
            />
          </div>

          <p className="rsvp__deadline">Please RSVP before 1st April 2027</p>

          <button
            type="submit"
            className="rsvp__submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send'}
          </button>

          {status === 'error' && (
            <p className="rsvp__error">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  )
}
