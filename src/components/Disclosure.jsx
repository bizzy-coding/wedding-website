import { useState } from 'react'
import './Disclosure.css'

/**
 * Collapsible panel used for the secondary Travel content (map, local stays)
 * so the section stays skimmable.
 */
export default function Disclosure({ title, subtitle, children }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`disclosure ${open ? 'disclosure--open' : ''}`}>
      <button
        type="button"
        className="disclosure__toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="disclosure__text">
          <span className="disclosure__title">{title}</span>
          {subtitle && <span className="disclosure__sub">{subtitle}</span>}
        </span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d={open ? 'M5 12l5-5 5 5' : 'M5 8l5 5 5-5'} />
        </svg>
      </button>

      {open && <div className="disclosure__panel">{children}</div>}
    </div>
  )
}
