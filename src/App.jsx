import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Career from './components/Career'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Technologies />
        <Projects />
        <Career />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
