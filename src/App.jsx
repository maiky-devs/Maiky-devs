import { Analytics } from "@vercel/analytics/react"
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import About from './Components/About.jsx'
import Projects from './Components/Proyects.jsx'
import Experience from './Components/Experience.jsx'
import Contact from './Components/Contact.jsx'
import Footer from './Components/Footer.jsx'
 
export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-body">
      <Analytics />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
 