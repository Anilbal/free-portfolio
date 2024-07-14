import React from 'react'
import Navbar from '../component/navbar/Navbar'
import '../page-css/ContactUs.css' 
import Footer from '../component/footer/Footer'

const ContactUs = () => {
  return (
    <>
     <Navbar/>
     <div className="contact-us">
        <div className='contact-top'>
        <div className="contact-left">
          <div className="globe">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14127.239350723527!2d85.34952164107092!3d27.723157068771602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bdb45cbc593%3A0x2d0d68684b1d03ab!2sBoudhha%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1716746066767!5m2!1sen!2snp" style={{height:"100%",width:"100%",borderRadius:"50%"}} ></iframe>
          </div>
        </div>
        <div className="contact-right">
          <div>
          <h1>Let's Work</h1>
          <h1>Together</h1>
          </div>
          <h3>Contact@yuvash-vaidhya.com</h3>
        </div>
        </div>
    <Footer/> 
    </div>
    </>
  )
}

export default ContactUs