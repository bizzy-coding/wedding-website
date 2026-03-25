import Nav from './components/Nav'
import Hero from './components/Hero'
import OurStory from './components/OurStory'
import BigDay from './components/BigDay'
import Schedule from './components/Schedule'
import Travel from './components/Travel'
import WeddingParty from './components/WeddingParty'
import Gifts from './components/Gifts'
import Rsvp from './components/Rsvp'
import Faqs from './components/Faqs'
import Footer from './components/Footer'
import Doodles from './components/Doodles'
import './App.css'

function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <OurStory />
      <BigDay />
      <Schedule />
      <Travel />
      <WeddingParty />
      <Gifts />
      <Rsvp />
      <Faqs />
      <Footer />
      <Doodles />
    </div>
  )
}

export default App
