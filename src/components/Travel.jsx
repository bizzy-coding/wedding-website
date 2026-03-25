import './Travel.css'

export default function Travel() {
  return (
    <div className="section-wrap section-wrap--alt" id="travel">
      <section className="section">
        <p className="section-title">Travel & Stay</p>
        <h2 className="section-heading">Getting There & Back</h2>

        <div className="travel__grid">
          {/* Getting There */}
          <div className="travel__card">
            <svg className="travel__icon" width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 3C12 3 8 8 8 14c0 8 10 19 10 19s10-11 10-19c0-6-4-11-10-11z" />
              <circle cx="18" cy="14" r="4" />
            </svg>
            <h3>Getting There</h3>
            <p className="travel__address">Wyresdale Park, Long Lane,<br />Scorton, PR3 1BT</p>
            <p className="travel__note">Nearest airport/train: Poulton-Le-Fylde</p>
          </div>

          {/* Accommodation */}
          <div className="travel__card">
            <svg className="travel__icon" width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 28V16l14-10 14 10v12a2 2 0 01-2 2H6a2 2 0 01-2-2z" />
              <path d="M14 30V20h8v10" />
            </svg>
            <h3>Accommodation</h3>
            <p>On-site accommodation for the night of the wedding is available from 3pm.</p>
            <p className="travel__note">Check in at the bar where staff will pass on the codes for entry.</p>
            <div className="travel__morning">
              <h4>The Morning After</h4>
              <p>Check out from all accommodation is 10am.</p>
              <p>Breakfast will be served at 9.30am.</p>
            </div>
          </div>

          {/* Getting Home */}
          <div className="travel__card">
            <svg className="travel__icon" width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 22h24M8 18l3-8h14l3 8" />
              <circle cx="10" cy="22" r="2" /><circle cx="26" cy="22" r="2" />
              <path d="M10 24v3M26 24v3" />
            </svg>
            <h3>Getting Home</h3>
            <p>Last orders at the bar at 12.30am. We recommend pre-booking taxis &mdash; the venue is rural.</p>

            <div className="travel__taxis">
              <h4>Suggested Taxis</h4>
              <ul>
                <li>A2B Cabs: <a href="tel:01995915091">01995 915091</a> / <a href="tel:07495720830">07495720830</a></li>
                <li>Garstang Local Cabs: <a href="tel:01995471020">01995 471020</a></li>
                <li>848 Taxis Lancaster: <a href="tel:01524848848">01524 848848</a></li>
              </ul>
            </div>

            <div className="travel__notices">
              <p>All guests not staying on site must have left by 1.30am.</p>
              <p>Cars left on premises must be collected by 11.30am the following day.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
