import './OurStory.css'

const milestones = [
  {
    year: '2020',
    text: "We met on Tinder, living proof that sometimes a cheeky swipe right can actually lead to something other than mild disappointment. It was basically love at first sight: Anna with her iconic ginger hair, and Mike with his dark and handsome look.",
    image: '/Images/b0a1184d-95de-425e-9b92-b668568da72d.JPG',
    alt: 'Anna and Merdz at a party',
  },
  {
    year: '2021',
    text: "We took the big step of moving in together and discovered that not only could we tolerate each other full-time, we actually liked it. So naturally, we doubled down and bought a house.",
    image: null,
    alt: '',
  },
  {
    year: '2025',
    text: "Mike proposed at sunrise in Cuba! Romantic, unexpected, and impressively early in the morning. Anna said yes and the rest is history.",
    image: '/Images/e51e1a9c-0ef5-42b8-bed1-3bfffcca08d7.JPG',
    alt: 'The proposal in Cuba at sunrise',
  },
  {
    year: '2026',
    text: "We brought home our puppy, Sally Cinnamon \u2014 our proudest and most chaotic journey yet.",
    image: '/Images/IMG_3223.jpg',
    alt: 'Anna and Merdz snorkelling',
  },
]

export default function OurStory() {
  return (
    <div className="section-wrap section-wrap--white" id="our-story">
      <section className="section">
        <p className="section-title">Our Story</p>
        <h2 className="section-heading">How It All Began</h2>
        <p className="our-story__intro">
          Along the way came several years of great parties, questionable dance moves,
          and a firm belief that &ldquo;one more drink&rdquo; is always a good idea. Mike brings the
          music and Anna brings the alcohol &mdash; a dangerously good combination.
        </p>
        <div className="our-story__timeline">
          {milestones.map((m, i) => (
            <div key={m.year} className={`our-story__item ${i % 2 === 1 ? 'our-story__item--reverse' : ''}`}>
              <div className="our-story__image-placeholder">
                {m.image ? (
                  <img src={m.image} alt={m.alt} />
                ) : (
                  <span className="our-story__image-label">Photo</span>
                )}
              </div>
              <div className="our-story__text">
                <span className="our-story__year">{m.year}</span>
                <p>{m.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
