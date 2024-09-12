// import React from 'react'
// import './Background.css'
// import dark_arrow from '../../assets/dark-arrow.png'
// const Background = () => {
//   return (
//     <div className='background container'>
//       <div className='background-text'>
//         <h1>Pioneering IoT to Reshape Global Interactions</h1>
//         <p>We have developed top-notch IOT devices and assited numerous
//           organizations in achieving economoic success.
//         </p>
//         <button className='btn'>Contact us<img src={dark_arrow} alt='' /></button>
//       </div>
//     </div>
//   )
// }

// export default Background



import React, { useState, useEffect } from 'react';
import './Background.css';
import dark_arrow from '../../assets/dark-arrow.png';
import videoSrc from '../../assets/greenVideo.mp4'; 

const words = ["Motivation", "Innovation", "Success", "Growth", "Leadership"]; 

const Background = () => {
  const words = ["Our Services", "Software Solutions", "Hardware Engineering", "Cyber Security and Privacy","Web Applications","Data Analysis And AI","Robotics Applications","SCADA Systems",""];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change word every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [words.length]);

  return (
    <div className='background container'>
      <video autoPlay muted loop className="background-video">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      
      <div className='background-text'>
        <h1>Pioneering IoT to Reshape Global Interactions</h1>
        <p>We have developed top-notch IoT devices and assisted numerous
          organizations in achieving economic success.
        </p>

        {/* Animated Words */}
        <div className="animated-words">
          <span key={currentWordIndex}>{words[currentWordIndex]}</span>
        </div>
        <button className='btn'>
          Contact us <img src={dark_arrow} alt='' />
        </button>
      </div>
    </div>
  );
}

export default Background;
