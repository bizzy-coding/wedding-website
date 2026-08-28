import Disclosure from './Disclosure'
import './VenueMap.css'

const VENUE = 'Wyresdale Park, Long Lane, Scorton, Preston, PR3 1BT'
const query = encodeURIComponent(VENUE)

export default function VenueMap() {
  return (
    <Disclosure title="Find us on a map" subtitle="Map & directions">
      <div className="venue-map__frame">
        <iframe
          title="Map showing Wyresdale Park, Scorton"
          src={`https://maps.google.com/maps?q=${query}&z=13&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      <div className="venue-map__actions">
        <a
          className="venue-map__btn"
          href={`https://www.google.com/maps/dir/?api=1&destination=${query}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.5 1.5L9.5 14.5l-1.5-6-6-1.5z" />
          </svg>
          Google Maps
        </a>
        <a
          className="venue-map__btn"
          href={`https://maps.apple.com/?daddr=${query}&dirflg=d`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.5 1.5L9.5 14.5l-1.5-6-6-1.5z" />
          </svg>
          Apple Maps
        </a>
      </div>
    </Disclosure>
  )
}
