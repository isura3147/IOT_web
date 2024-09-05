import React, { useRef } from 'react'
import './Testimonials.css'

import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import client_1 from '../../assets/client-1.png'
import client_2 from '../../assets/client-2.png'
import client_3 from '../../assets/client-3.png'
import client_4 from '../../assets/client-4.png'


const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = () => {
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}    

const slideBackward = () => {
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}   

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="client-info">
                            <img src={client_1} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Colombo, Sri Lanka</span>
                            </div>
                        </div>
                        <p>
                        IoT solutions Pvt Ltd is a standout automation company that 
                        excels in delivering customized, scalable and secure automation
                        solutions. Their technical expertise, combined with a client centric
                        approach, makes them a top choice for business seeking to optimize
                        their operations through automation. 
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="client-info">
                            <img src={client_2} alt="" />
                            <div>
                                <h3>Emily Williams</h3>
                                <span>Ja-Ela, Sri Lanka</span>
                            </div>
                        </div>
                        <p>
                            IoT Solutions Pvt Ltd has a team of skilled
                            engineers at the forefront of automation 
                            technologies. They excel in PLC programming,
                            SCADA design, and integration with IoT and 
                            Industry 4.0 concepts, consistently 
                            demonstrating proficiency and innovation.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="client-info">
                            <img src={client_3} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Chilaw, Sri Lanka</span>
                            </div>
                        </div>
                        <p>
                            I highly recommend IoT Solutions for their exceptional
                            expertise in automation solutions. With a proven track 
                            record of successful projects across various industries, 
                            they have consistently demonstrated a deep understanding
                            of automation technologies and a commitment to delivering
                            top-tier service.
                        </p>
                    </div>
                </li>
                {/* <li>
                    <div className="slide">
                        <div className="client-info">
                            <img src={client_4} alt="" />
                            <div>
                                <h3>Emily Williams</h3>
                                <span>Athurugiriya, Sri Lanka</span>
                            </div>
                        </div>
                        <p>
                            IoT solutions Pvt Ltd is a standout automation company that 
                            excels in delivering customized, scalable and secure automation
                            solutions. Their technical expertise, combined with a client centric
                            approach, makes them a top choice for business seeking to optimize
                            their operations through automation.
                        </p>
                    </div>
                </li> */}
            </ul>
        </div>
    </div>
  )
}

export default Testimonials
