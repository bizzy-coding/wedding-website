import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__names">Anna & Merdz</p>
        <p className="footer__date">21st August 2027</p>
        <svg className="footer__heart" width="24" height="22" viewBox="0 0 24 22" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 20s-9-5.5-9-12c0-4 3-6.5 5.5-6.5 1.8 0 3 1 3.5 2 .5-1 1.7-2 3.5-2C18 1.5 21 4 21 8c0 6.5-9 12-9 12z" />
        </svg>
      </div>
    </footer>
  )
}
