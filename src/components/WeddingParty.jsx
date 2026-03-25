import './WeddingParty.css'

const party = [
  { name: 'Faye', role: 'Maid of Honour', side: 'bride' },
  { name: 'Bizz', role: 'Bridesmaid', side: 'bride' },
  { name: 'Fran', role: 'Best Man', side: 'groom' },
  { name: 'Ben', role: 'Best Man', side: 'groom' },
  { name: 'Matt', role: 'Groomsman', side: 'groom' },
  { name: 'Alfie', role: 'Groomsman', side: 'groom' },
  { name: 'Dave', role: 'Groomsman', side: 'groom' },
  { name: 'Podge', role: 'Groomsman', side: 'groom' },
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
                <span>{getInitials(p.name)}</span>
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
