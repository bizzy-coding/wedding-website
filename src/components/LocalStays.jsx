import Disclosure from './Disclosure'
import './LocalStays.css'

// Ordered by distance from Wyresdale Park, nearest first
const stays = [
  {
    name: 'The Priory',
    place: 'Scorton',
    type: 'Bed & breakfast',
    url: 'https://www.theprioryscorton.co.uk/',
  },
  {
    name: 'Steeple View @ Snowhill Barn',
    place: 'Scorton',
    type: 'Studio apartment',
    url: 'https://www.airbnb.co.uk/rooms/1094802847114964991',
  },
  {
    name: 'Royal Oak Hotel',
    place: 'Garstang',
    type: 'Hotel & pub',
    url: 'https://royaloakgarstang.co.uk/',
  },
  {
    name: 'Garstang Country Hotel & Golf Club',
    place: 'Garstang',
    type: 'Country hotel',
    url: 'https://www.garstanghotelandgolf.com/',
  },
  {
    name: 'The Fleece Inn',
    place: 'Dolphinholme',
    type: 'Pub with rooms',
    url: 'https://fleeceinn.co.uk/',
  },
  {
    name: 'Lancaster House Hotel',
    place: 'Lancaster',
    type: 'Hotel',
    url: 'https://englishlakes.co.uk/hotels/lancaster-house-hotel/',
  },
  {
    name: "Owd Nell's at The Thatched Hamlet",
    place: 'Bilsborrow',
    type: 'Canalside tavern with rooms',
    url: 'https://www.jamesplaces.com/owd-nells-thatched-hamlet/',
  },
  {
    name: 'Premier Inn Preston North',
    place: 'Bilsborrow',
    type: 'Hotel',
    url: 'https://www.premierinn.com/gb/en/hotels/england/lancashire/preston/preston-north.html',
  },
]

export default function LocalStays() {
  return (
    <Disclosure title="Staying offsite?" subtitle={`${stays.length} places to stay nearby`}>
      <p className="stays__note">Listed in order of distance from Wyresdale Park</p>
      <ul className="stays__grid">
        {stays.map(stay => (
          <li key={stay.name} className="stays__card">
            <a href={stay.url} target="_blank" rel="noopener noreferrer">
              <span className="stays__type">{stay.type}</span>
              <span className="stays__name">{stay.name}</span>
              <span className="stays__place">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 1C4 1 2.5 2.5 2.5 4.5c0 2.5 3.5 6.5 3.5 6.5s3.5-4 3.5-6.5C9.5 2.5 8 1 6 1z" />
                  <circle cx="6" cy="4.5" r="1.25" />
                </svg>
                {stay.place}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Disclosure>
  )
}
