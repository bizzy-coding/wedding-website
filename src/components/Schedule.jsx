import './Schedule.css'

const events = [
  { time: '1:00 PM', label: 'Guests Arrive', icon: 'car' },
  { time: '2:00 PM', label: 'Ceremony', icon: 'rings' },
  { time: '2:30 PM', label: 'Reception', icon: 'champagne' },
  { time: '3:30 PM', label: 'Dinner & Speeches', icon: 'dinner' },
  { time: '5:30 PM', label: 'Cocktail Hour', icon: 'cocktail' },
  { time: '6:30 PM', label: 'Dancing', icon: 'music' },
  { time: '12:30 AM', label: 'Carriages', icon: 'moon' },
]

function TimelineIcon({ type }) {
  const props = { width: 28, height: 28, viewBox: "0 0 28 28", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }

  switch (type) {
    case 'car':
      return <svg {...props}><path d="M4 18h20M6 14l2-6h12l2 6M8 18v3M20 18v3" /><circle cx="8" cy="18" r="1" /><circle cx="20" cy="18" r="1" /></svg>
    case 'rings':
      return <svg {...props}><circle cx="11" cy="16" r="7" /><circle cx="17" cy="16" r="7" /><path d="M14 6l-1 3M14 6l1 3M14 6v-3" /></svg>
    case 'champagne':
      return <svg {...props}><path d="M10 14L12 4h4l2 10M9 14q5 3 10 0M14 17v7M10 24h8" /><path d="M6 3l-2 2M22 3l2 2M14 2v-1" /></svg>
    case 'dinner':
      return <svg {...props}><circle cx="14" cy="16" r="8" /><path d="M14 8v-5M10 3v6M18 3c0 3-2 4-2 6" /></svg>
    case 'cocktail':
      return <svg {...props}><path d="M7 4h14l-7 10v7M10 25h8" /><path d="M7 4l3 4h8l3-4" /><circle cx="18" cy="8" r="1" /></svg>
    case 'music':
      return <svg {...props}><path d="M10 22V8l12-4v14" /><circle cx="10" cy="22" r="3" /><circle cx="22" cy="18" r="3" /></svg>
    case 'moon':
      return <svg {...props}><path d="M20 14a8 8 0 11-12-6.9 6 6 0 008 9.5A8 8 0 0020 14z" /></svg>
    default:
      return null
  }
}

export default function Schedule() {
  return (
    <div className="section-wrap section-wrap--white">
      <section className="section">
        <p className="section-title">Schedule</p>
        <h2 className="section-heading">Order of the Day</h2>
        <div className="schedule__timeline">
          {events.map((e, i) => (
            <div key={i} className="schedule__item">
              <div className="schedule__time">{e.time}</div>
              <div className="schedule__dot">
                <TimelineIcon type={e.icon} />
              </div>
              <div className="schedule__label">{e.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
