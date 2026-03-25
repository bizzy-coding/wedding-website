import { useState } from 'react'
import './Rsvp.css'

const GOOGLE_SCRIPT_URL = '' // You'll add this after setting up Google Sheets

const mealOptions = [
  'Chicken',
  'Beef',
  'Vegetarian',
  'Vegan',
]

export default function Rsvp() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    attending: '',
    mealChoice: '',
    dietary: '',
    plusOneName: '',
    plusOneMeal: '',
    plusOneDietary: '',
    songRequest: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    if (!GOOGLE_SCRIPT_URL) {
      // Demo mode - just show success
      setTimeout(() => setStatus('success'), 1000)
      return
    }

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
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
            <p>We&rsquo;ve received your RSVP. We can&rsquo;t wait to celebrate with you!</p>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="section-wrap section-wrap--white" id="rsvp">
      <section className="section">
        <p className="section-title">RSVP</p>
        <h2 className="section-heading">Will You Be There?</h2>
        <p className="rsvp__deadline">Please let us know by 1st May 2027</p>

        <form className="rsvp__form" onSubmit={handleSubmit}>
          <div className="rsvp__field">
            <label htmlFor="name">Full Name *</label>
            <input
              id="name" name="name" type="text" required
              value={form.name} onChange={handleChange}
              placeholder="Your full name"
            />
          </div>

          <div className="rsvp__field">
            <label htmlFor="email">Email *</label>
            <input
              id="email" name="email" type="email" required
              value={form.email} onChange={handleChange}
              placeholder="your@email.com"
            />
          </div>

          <div className="rsvp__field">
            <label>Will you be attending? *</label>
            <div className="rsvp__radio-group">
              <label className={`rsvp__radio ${form.attending === 'yes' ? 'rsvp__radio--active' : ''}`}>
                <input type="radio" name="attending" value="yes" required onChange={handleChange} />
                Joyfully Accepts
              </label>
              <label className={`rsvp__radio ${form.attending === 'no' ? 'rsvp__radio--active' : ''}`}>
                <input type="radio" name="attending" value="no" onChange={handleChange} />
                Regretfully Declines
              </label>
            </div>
          </div>

          {form.attending === 'yes' && (
            <>
              <div className="rsvp__field">
                <label htmlFor="mealChoice">Meal Choice *</label>
                <select
                  id="mealChoice" name="mealChoice" required
                  value={form.mealChoice} onChange={handleChange}
                >
                  <option value="">Select your meal...</option>
                  {mealOptions.map(m => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>

              <div className="rsvp__field">
                <label htmlFor="dietary">Dietary Requirements</label>
                <input
                  id="dietary" name="dietary" type="text"
                  value={form.dietary} onChange={handleChange}
                  placeholder="Any allergies or requirements"
                />
              </div>

              <fieldset className="rsvp__fieldset">
                <legend>Plus One (if applicable)</legend>
                <div className="rsvp__field">
                  <label htmlFor="plusOneName">Plus One Name</label>
                  <input
                    id="plusOneName" name="plusOneName" type="text"
                    value={form.plusOneName} onChange={handleChange}
                    placeholder="Their full name"
                  />
                </div>
                {form.plusOneName && (
                  <>
                    <div className="rsvp__field">
                      <label htmlFor="plusOneMeal">Their Meal Choice</label>
                      <select
                        id="plusOneMeal" name="plusOneMeal"
                        value={form.plusOneMeal} onChange={handleChange}
                      >
                        <option value="">Select their meal...</option>
                        {mealOptions.map(m => (
                          <option key={m} value={m}>{m}</option>
                        ))}
                      </select>
                    </div>
                    <div className="rsvp__field">
                      <label htmlFor="plusOneDietary">Their Dietary Requirements</label>
                      <input
                        id="plusOneDietary" name="plusOneDietary" type="text"
                        value={form.plusOneDietary} onChange={handleChange}
                        placeholder="Any allergies or requirements"
                      />
                    </div>
                  </>
                )}
              </fieldset>

              <div className="rsvp__field">
                <label htmlFor="songRequest">Song Request</label>
                <input
                  id="songRequest" name="songRequest" type="text"
                  value={form.songRequest} onChange={handleChange}
                  placeholder="What song gets you on the dance floor?"
                />
              </div>
            </>
          )}

          <button
            type="submit"
            className="rsvp__submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send RSVP'}
          </button>

          {status === 'error' && (
            <p className="rsvp__error">Something went wrong. Please try again or contact us directly.</p>
          )}
        </form>
      </section>
    </div>
  )
}
