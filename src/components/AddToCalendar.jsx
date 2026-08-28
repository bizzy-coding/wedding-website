import { useState, useEffect, useRef } from 'react'
import './AddToCalendar.css'

const TITLE = 'Anna & Michael’s Wedding'
const LOCATION = 'Wyresdale Park, Long Lane, Scorton, Preston, PR3 1BT'
const DETAILS = 'Guests arrive from 1pm. Ceremony begins at 2pm. Carriages at 12.30am.'

// 21st August 2027 is BST (UTC+1), so local times shift back an hour:
// guests arrive 1pm -> 12:00Z, carriages 12.30am -> 23:30Z the same day.
const START = '20270821T120000Z'
const END = '20270821T233000Z'

const GOOGLE_URL =
  'https://calendar.google.com/calendar/render?action=TEMPLATE' +
  `&text=${encodeURIComponent(TITLE)}` +
  `&dates=${START}/${END}` +
  `&details=${encodeURIComponent(DETAILS)}` +
  `&location=${encodeURIComponent(LOCATION)}`

const OUTLOOK_URL =
  'https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent' +
  `&subject=${encodeURIComponent(TITLE)}` +
  '&startdt=2027-08-21T12:00:00Z' +
  '&enddt=2027-08-21T23:30:00Z' +
  `&body=${encodeURIComponent(DETAILS)}` +
  `&location=${encodeURIComponent(LOCATION)}`

// Apple has no "add event" web endpoint, so Apple Calendar gets a real .ics
// URL (public/wedding.ics). Served as text/calendar, iOS Safari hands it
// straight to Calendar instead of dumping a file in Downloads.
const ICS_URL = '/wedding.ics'

export default function AddToCalendar() {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)

  // Close on outside click or Escape, like any other menu.
  useEffect(() => {
    if (!open) return

    function onPointerDown(e) {
      if (!wrapRef.current?.contains(e.target)) setOpen(false)
    }
    function onKeyDown(e) {
      if (e.key === 'Escape') setOpen(false)
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div className="calendar" ref={wrapRef}>
      <button
        className="calendar__trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3.5" width="12" height="11" rx="1.5" />
          <path d="M2 7h12M5.5 1.5v3M10.5 1.5v3" />
        </svg>
        Add to Calendar
        <svg className="calendar__chevron" width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d={open ? 'M5 12l5-5 5 5' : 'M5 8l5 5 5-5'} />
        </svg>
      </button>

      {open && (
        <div className="calendar__menu" role="menu">
          <a
            href={GOOGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            Google Calendar
          </a>
          <a
            href={OUTLOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            Outlook
          </a>
          <a
            href={ICS_URL}
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            Apple Calendar
            <span>iPhone, iPad &amp; Mac</span>
          </a>
        </div>
      )}
    </div>
  )
}
