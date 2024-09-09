import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {  faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
  
<footer className="text-center text-lg-start bg-body-tertiary text-muted">
 
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>

    <div  >
    <a href="https://www.facebook.com/profile.php?id=61550879721798" className="me-4 text-reset">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a href="https://www.linkedin.com/company/av-iot/" className="me-4 text-reset">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a href="https://twitter.com" className="me-4 text-reset">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </div>

  </section>



  <section className="">
    <div className="container text-center text-md-start mt-5">

      <div className="row mt-3">

        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
      
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me"></i>AV IOT Solutions Pvt Ltd.
          </h6>
          <p>
          We are pioneers in utilizing the potential of IoT technology to transform how organizations and people engage with the real world.
          </p>
        </div>
    

     
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

         
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
         
        <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#background" className="text-reset">Home</a>
          </p>
          <p>
            <a href="#service" className="text-reset">Services</a>
          </p>
          <p>
            <a href="#about" className="text-reset">About Us</a>
          </p>
          <p>
            <a href="#contact" className="text-reset">Contact</a>
          </p>
        </div>
       
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p className="fas fa-home me"> 298A, Borella Road, Habarakada, Homagama</p>
          <p>
            <i className="fas fa-envelope me"></i>
            info@iotsolutions.lk
          </p>
          <p><i className="fas fa-phone me"></i> +94777371118</p>
         
        </div>
      
      </div>

    </div>
  </section>
 

  <div className="text-center p-4" style={{backgroundColor:'white'}} >
    © 2021 Copyright:
    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">AV IOT Solutions</a>
  </div>

</footer>

  )
}

export default Footer
