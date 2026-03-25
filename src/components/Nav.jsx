import { useState, useEffect } from 'react'
import './Nav.css'

const navLinks = [
  { label: 'Our Story', href: '#our-story' },
  { label: 'The Big Day', href: '#big-day' },
  { label: 'Travel', href: '#travel' },
  { label: 'Wedding Party', href: '#wedding-party' },
  { label: 'Gifts', href: '#gifts' },
  { label: 'RSVP', href: '#rsvp' },
  { label: 'FAQs', href: '#faqs' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#" className="nav__logo">A & M</a>
        <button
          className={`nav__burger ${menuOpen ? 'nav__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
