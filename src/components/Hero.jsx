import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__save-the-date">Save the Date</p>
          <h1 className="hero__title">
            Anna & Merdz<br />
            <span className="hero__subtitle">are getting married!</span>
          </h1>
          <p className="hero__date">Saturday 21st August 2027</p>
          <p className="hero__venue">Wyresdale Park, Scorton</p>
          <div className="hero__heart">
            <svg width="32" height="28" viewBox="0 0 32 28" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M16 26s-12-7.5-12-15C4 5.5 7.5 2 11 2c2.5 0 4.5 1.5 5 3 .5-1.5 2.5-3 5-3 3.5 0 7 3.5 7 9 0 7.5-12 15-12 15z" />
            </svg>
          </div>
          <a href="#rsvp" className="hero__cta">RSVP</a>
        </div>

        <div className="hero__photo">
          <img src="/Images/e51e1a9c-0ef5-42b8-bed1-3bfffcca08d7.JPG" alt="Anna and Merdz - the proposal in Cuba" />
        </div>
      </div>

      {/* Hand-drawn decorations */}
      <svg className="hero__doodle hero__doodle--champagne" width="60" height="80" viewBox="0 0 60 80" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 35 L25 10 L35 10 L40 35" />
        <path d="M18 35 Q30 42 42 35" />
        <path d="M30 42 L30 65" />
        <path d="M22 65 L38 65" />
        <path d="M12 8 L8 2" />
        <path d="M48 8 L52 2" />
        <path d="M30 5 L30 0" />
        <path d="M15 15 L10 15" />
        <path d="M45 15 L50 15" />
      </svg>

      <svg className="hero__doodle hero__doodle--ring" width="50" height="60" viewBox="0 0 50 60" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="25" cy="38" rx="14" ry="16" />
        <path d="M18 26 L22 16 L28 16 L32 26" />
        <path d="M25 16 L25 10" />
        <path d="M22 12 L25 8 L28 12" />
      </svg>
    </section>
  )
}
