

import React from 'react';
import './Services.css';
import serivce_1 from '../../assets/privacy.png';
import serivce_2 from '../../assets/datanly.png';
import serivce_3 from '../../assets/hardwareEng.jpg';
import service_4 from '../../assets/rbticsappl.png';
import serivce_5 from '../../assets/webappl.png';
import service_6 from '../../assets/softEng.jpg';
import service_7 from '../../assets/scada.png';

import backgroundVideo from '../../assets/newserviceVid.mp4'; 



const Services = () => {
  return (
    
      /* <video className='background-video' autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */
      <div className='services'>
        <div className='service'>
          <div className='service-inner'>
            <img src={serivce_1} alt='' />
            <div className="caption">
              <h1>Cyber security and privacy</h1>
              <p> Service to ensure data confidentiality and regulatory compliance.</p>
            </div>
          </div>
        </div>
        <div className='service'>
          <div className='service-inner'>
            <img src={serivce_2} alt='' />
            <div className="caption">
              <h1>Data Analysis and AI</h1>
              <p> optimize operations, and foster innovation through intelligent automation.</p>
            </div>
          </div>
        </div>
        <div className='service'>
          <div className='service-inner'>
            <img src={serivce_3} alt='' />
            <div className="caption">
              <h1>Hardware Engineering</h1>
              <p>Deliver innovative, high-performance solutions, from concept to production, ensuring reliable and scalable technology tailored to your business needs</p>
            </div>
          </div>
        </div>
        <div className='service'>
          <div className='service-inner'>
            <img src={service_4} alt='' />
            <div className="caption">
              <h1>Robotics Application</h1>
              <p>Integrates advanced automation and intelligent systems to streamline operations, enhance productivity, and drive innovation across industries.</p>
            </div>
          </div>
        </div>
        <div className='service'>
          <div className='service-inner'>
            <img src={serivce_5} alt='' />
            <div className="caption">
              <h1>Web Applications</h1>
              <p>Delivers customized, scalable, and secure solutions, tailored to optimize user experience and drive business growth in the digital space.</p>
            </div>
          </div>
        </div>
        <div className='service'>
          <div className='service-inner'>
            <img src={service_6} alt='' />
            <div className="caption">
              <h1>Software Engineering</h1>
              <p>Provides innovative and robust solutions, designed to enhance functionality, streamline operations, and deliver exceptional performance for your business needs.</p>
            </div>
          </div>
        </div>
        <div className='service'>
          <div className='service-inner'>
            <img src={service_7} alt='' />
            <div className="caption">
              <h1>SCADA Systems</h1>
              <p>Delivers real-time monitoring and control solutions that optimize operational efficiency, enhance data accuracy, and ensure seamless integration for your industrial processes.</p>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Services;