import './WeddingParty.css'

const party = [
  { name: 'Faye', role: 'Maid of Honour', side: 'bride', image: '/Images/faye-bw.jpg' },
  { name: 'Bizz', role: 'Bridesmaid', side: 'bride', image: '/Images/bizz-bw.jpg' },
  { name: 'Fran', role: 'Best Man', side: 'groom', image: '/Images/fran-bw.jpg' },
  { name: 'Ben', role: 'Best Man', side: 'groom', image: '/Images/ben-bw.jpg' },
  { name: 'Matt', role: 'Best Man', side: 'groom', image: '/Images/matt-bw.jpg' },
  { name: 'Alfie', role: 'Best Man', side: 'groom', image: '/Images/alfie-bw.jpg' },
  { name: 'Dave', role: 'Best Man', side: 'groom', image: '/Images/dave-bw.jpg' },
  { name: 'Arthur', role: 'Best Man', side: 'groom', image: '/Images/arthur-bw.jpg' },
]

function getInitials(name) {
  return name.charAt(0).toUpperCase()
}

export default function WeddingParty() {
  return (
    <div className="section-wrap section-wrap--white" id="wedding-party">
      <section className="section">
        <p className="section-title">Wedding Party</p>
        <h2 className="section-heading">Our Favourite People</h2>
        <div className="party__grid">
          {party.map(p => (
            <div key={p.name} className="party__member">
              <div className="party__avatar">
                {p.image
                  ? <img src={p.image} alt={p.name} />
                  : <span>{getInitials(p.name)}</span>}
              </div>
              <h3 className="party__name">{p.name}</h3>
              <p className="party__role">{p.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
