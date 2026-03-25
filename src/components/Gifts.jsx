import './Gifts.css'

export default function Gifts() {
  return (
    <div className="section-wrap section-wrap--alt" id="gifts">
      <section className="section">
        <p className="section-title">Gifts</p>
        <h2 className="section-heading">Your Presence Is Our Present</h2>
        <div className="gifts__content">
          <svg className="gifts__icon" width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="20" width="36" height="22" rx="2" />
            <rect x="2" y="14" width="44" height="6" rx="2" />
            <path d="M24 14v28" />
            <path d="M24 14c-4-8-14-8-10 0" />
            <path d="M24 14c4-8 14-8 10 0" />
          </svg>
          <p>
            Your presence at our wedding truly means the world to us and is more than enough.
          </p>
          <p>
            If you do wish to give a gift, a contribution towards our honeymoon would be
            very much appreciated, but absolutely not expected.
          </p>
        </div>
      </section>
    </div>
  )
}
