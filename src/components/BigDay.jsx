import './BigDay.css'

export default function BigDay() {
  return (
    <div className="section-wrap section-wrap--alt" id="big-day">
      <section className="section">
        <p className="section-title">The Details</p>
        <h2 className="section-heading">The Big Day</h2>

        <div className="bigday__grid">
          <div className="bigday__card">
            <svg className="bigday__icon" width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="20" cy="20" r="15" />
              <path d="M20 10 L20 20 L27 24" />
            </svg>
            <h3>When</h3>
            <p className="bigday__detail">Saturday 21st August 2027</p>
            <p className="bigday__sub">Ceremony begins at 2pm</p>
            <p className="bigday__sub">Guests arrive from 1pm</p>
          </div>

          <div className="bigday__card">
            <svg className="bigday__icon" width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 5 L20 2" />
              <path d="M20 5 C12 5 8 12 8 18 C8 28 20 37 20 37 C20 37 32 28 32 18 C32 12 28 5 20 5Z" />
              <circle cx="20" cy="18" r="5" />
            </svg>
            <h3>Where</h3>
            <p className="bigday__detail">Wyresdale Park</p>
            <p className="bigday__sub">Long Lane, Scorton, PR3 1BT</p>
          </div>

          <div className="bigday__card">
            <svg className="bigday__icon" width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 32 L8 14 L20 6 L32 14 L32 32 L24 32 L24 22 L16 22 L16 32 Z" />
            </svg>
            <h3>Dress Code</h3>
            <p className="bigday__detail">Formal</p>
          </div>
        </div>

        <div className="bigday__notes">
          <p>If you are bringing confetti please ensure it is petals, leaves or dried flowers.</p>
          <p>The bar runs a card only bar so cash will not be accepted on the day.</p>
        </div>
      </section>
    </div>
  )
}
