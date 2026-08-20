import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Facilities from './components/Facilities.jsx'
import Process from './components/Process.jsx'
import Guide from './components/Guide.jsx'
import Location from './components/Location.jsx'
import Faq from './components/Faq.jsx'
import Footer from './components/Footer.jsx'
import FloatingCall from './components/FloatingCall.jsx'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <About />
        <Facilities />
        <Process />
        <Guide />
        <Location />
        <Faq />
      </main>
      <Footer />
      <FloatingCall />
    </>
  )
}
