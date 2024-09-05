import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Background from './Components/Background/Background'
import Services from './Components/Services/Services'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Background/>
      <div className="container">
        <Title subTitle='Our Services' title='What we offer'/>
        <Services/>
        <About/>
        <Title subTitle='Gallery' title='Projects done'/>
        <Projects/>
        <Title subTitle='TESTIMONIALS' title='What our clients say'/>
        <Testimonials/>
        <Title subTitle='Contact us' title='Get in touch'/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
