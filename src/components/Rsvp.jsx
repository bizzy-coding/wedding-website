import { useState } from 'react'
import Disclosure from './Disclosure'
import './Rsvp.css'

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw6oPp16_AUJWep2aZl3HGuSpSpQN-OXfNyf1nFElKA30Fd3DAVsCk9SvZZhMCHi-y2/exec'

const mealOptions = [
  'Chicken',
  'Beef',
  'Vegetarian',
  'Vegan',
]

const dietaryOptions = [
  'No dietary requirements',
  'Vegetarian',
  'Vegan',
  'Gluten-free',
  'Dairy-free',
  'Nut allergy',
  'Other (please specify)',
]

const OTHER = 'Other (please specify)'
const NONE = 'No dietary requirements'

const emptyForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  mealChoice: '',
}

export default function Rsvp() {
  const [form, setForm] = useState(emptyForm)
  const [attending, setAttending] = useState(true)
  const [dietary, setDietary] = useState([])
  const [dietaryOther, setDietaryOther] = useState('')
  const [status, setStatus] = useState('idle')

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function resetForm() {
    setForm(emptyForm)
    setAttending(true)
    setDietary([])
    setDietaryOther('')
    setStatus('idle')
  }

  function toggleDietary(option) {
    setDietary(prev => {
      if (prev.includes(option)) return prev.filter(o => o !== option)
      // "No dietary requirements" is mutually exclusive with everything else
      if (option === NONE) return [NONE]
      return [...prev.filter(o => o !== NONE), option]
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    // Flatten to a single string so the existing sheet column still works
    const dietaryText = dietary
      .map(o => (o === OTHER && dietaryOther.trim() ? `Other: ${dietaryOther.trim()}` : o))
      .join(', ')

    const payload = {
      ...form,
      attending: attending ? 'Yes' : 'No',
      // Food answers are meaningless for a decline
      dietary: attending ? dietaryText : '',
      mealChoice: attending ? form.mealChoice : '',
      guestType: 'day',
    }

    if (!GOOGLE_SCRIPT_URL) {
      setTimeout(() => setStatus('success'), 1000)
      return
    }

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        // no-cors only permits a safelisted Content-Type; application/json is
        // stripped by the browser. Apps Script reads postData.contents either
        // way, so send text/plain and parse the JSON server-side.
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
      })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="section-wrap section-wrap--white" id="rsvp">
        <section className="section">
          <div className="rsvp__success">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="28" cy="28" r="24" />
              <path d="M18 28l7 7 13-13" />
            </svg>
            <h2 className="section-heading">Thank You!</h2>
            <p>
              {attending
                ? 'We’ve received your RSVP. We can’t wait to celebrate with you!'
                : 'We’ve received your RSVP. Sorry you can’t make it, but thank you for letting us know.'}
            </p>
            <button className="rsvp__again" onClick={resetForm}>
              Someone else needs to RSVP
            </button>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="section-wrap section-wrap--white" id="rsvp">
      <section className="section">
        <p className="section-title">RSVP</p>
        <h2 className="section-heading">RSVP</h2>

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

          <div className="rsvp__field">
            <input
              name="email" type="email" required
              value={form.email} onChange={handleChange}
              placeholder="EMAIL"
            />
          </div>

          <div className="rsvp__field">
            <input
              name="phone" type="tel"
              value={form.phone} onChange={handleChange}
              placeholder="PHONE (OPTIONAL)"
            />
          </div>

          <div className="rsvp__attending">
            <button
              type="button"
              className={`rsvp__attending-btn ${attending ? 'rsvp__attending-btn--active' : ''}`}
              onClick={() => setAttending(true)}
              aria-pressed={attending}
            >
              I&rsquo;ll be there
            </button>
            <button
              type="button"
              className={`rsvp__attending-btn ${!attending ? 'rsvp__attending-btn--active' : ''}`}
              onClick={() => setAttending(false)}
              aria-pressed={!attending}
            >
              Can&rsquo;t make it
            </button>
          </div>

          {attending && (
            <>
              <div className="rsvp__field">
                <select
                  name="mealChoice" required
                  value={form.mealChoice} onChange={handleChange}
                >
                  <option value="">MEAL SELECTION</option>
                  {mealOptions.map(m => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>

              <div className="rsvp__disclosure">
                <Disclosure
                  title="Dietary requirements?"
                  subtitle={dietary.length
                    ? `${dietary.length} selected`
                    : 'Optional, tap if you have any'}
                >
                  <div className="rsvp__dietary">
                    {dietaryOptions.map(option => (
                      <label key={option} className="rsvp__checkbox">
                        <input
                          type="checkbox"
                          checked={dietary.includes(option)}
                          onChange={() => toggleDietary(option)}
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                    {dietary.includes(OTHER) && (
                      <input
                        className="rsvp__dietary-other"
                        type="text"
                        value={dietaryOther}
                        onChange={e => setDietaryOther(e.target.value)}
                        placeholder="PLEASE SPECIFY"
                      />
                    )}
                  </div>
                </Disclosure>
              </div>
            </>
          )}

          <p className="rsvp__deadline">Please RSVP before 1st April 2027</p>

          <button
            type="submit"
            className="rsvp__submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send'}
          </button>

          {status === 'error' && (
            <p className="rsvp__error">Something went wrong. Please try again or contact us directly.</p>
          )}
        </form>
      </section>
    </div>
  )
}
