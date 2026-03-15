import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Menu from './Components/Menu'
import About from './Components/About'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App