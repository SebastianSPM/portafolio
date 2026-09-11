import './App.css'
import AboutMe from './components/AboutMe/AboutMe'
import Footer from './components/Footer/Footer'
import HeroSection from './components/HeroSection/HeroSection'
import Technology from './components/Technology/Technology'
import Proyects from './components/Proyects/Proyects.tsx'
import Contact from './components/Contact/Contact.tsx'

function App() {

  return (
    <>
      <HeroSection />
      <AboutMe />
      <Technology />
      <Proyects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
