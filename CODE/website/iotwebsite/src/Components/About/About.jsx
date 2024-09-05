import React from 'react'
import './About.css'
import about_img from '../../assets/background2.jpg'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'/>
        </div>
        <div className="about-right">
            <h3>About us</h3>
            {/* <h2>Nurturning tomorrow leader</h2> */}
            <p> 
                We are pioneers in delievering innovative IoT
                solutions that empower businesses. Our expert 
                team combines extensive experience with a 
                commitment to excellence, driving efficiency, 
                enhancing productivity, and unlocking new growth
                opportunities. Discover how our tailored solutions
                can transform your business today.
            </p>
        </div>

    </div>
  )
}
import './About.css'

export default About
