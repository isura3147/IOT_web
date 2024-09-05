import React from 'react'
import './Services.css'
import serivce_1 from '../../assets/cybrsec.jpg'
import serivce_2 from '../../assets/datanly.png'
import serivce_3 from '../../assets/hrdwreeng.jpg'
import serivce_4 from '../../assets/rbticsappl.png'
import service_5 from '../../assets/scdasys.jpg'
import service_6 from '../../assets/webappl.png'
import service_icon_1 from '../../assets/cybrsec_icon.jpg'
import service_icon_2 from '../../assets/datanly_icon.png'
import service_icon_3 from '../../assets/hrdwreeng_icon.jpg'
import service_icon_4 from '../../assets/rbticsappl_icon.png'
import service_icon_5 from '../../assets/scdasys_icon.jpg'
import service_icon_6 from '../../assets/webappl_icon.png'

const Services = () => {
  return (
    <div className='services'>
      <div className='service'>
        <img src={serivce_1} alt='' />
        <div className="caption">
            <img src={service_icon_1} alt="" />
            <p>Cyber security and privacy</p>
        </div>
      </div>
      <div className='service'>
        <img src={serivce_2} alt='' />
        <div className="caption">
            <img src={service_icon_2} alt="" />
            <p>Data Analysis and AI</p>
        </div>
      </div>
      <div className='service'>
        <img src={serivce_3} alt='' />
        <div className="caption">
            <img src={service_icon_3} alt="" />
            <p>Hardware Engineering</p>
        </div>
      </div>
      <div className='service'>
        <img src={serivce_4} alt='' />
        <div className="caption">
            <img src={service_icon_4} alt="" />
            <p>Robotics Application</p>
        </div>
      </div>
      <div className='service'>
        <img src={service_5} alt='' />
        <div className="caption">
            <img src={service_icon_5} alt="" />
            <p>SCADA Systems</p>
        </div>
      </div>
      <div className='service'>
        <img src={service_6} alt='' />
        <div className="caption">
            <img src={service_icon_6} alt="" />
            <p>Web Applications</p>
        </div>
      </div>
    </div>
  )
}

export default Services
