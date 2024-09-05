import React from 'react'
import './Background.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Background = () => {
  return (
    <div className='background container'>
      <div className='background-text'>
        <h1>Pioneering IoT to Reshape Global Interactions</h1>
        <p>We have developed top-notch IOT devices and assited numerous
          organizations in achieving economoic success.
        </p>
        <button className='btn'>Contact us<img src={dark_arrow} alt='' /></button>
      </div>
    </div>
  )
}

export default Background
