import React from 'react'
import  "./contact.css"
import { BsArrowDownRight } from "react-icons/bs";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
import { BsArrowUpRight } from "react-icons/bs";
import Footer from '../footer/Footer';


const Contact = () => {
  return (
    <>
    <div className='contact-page'>
      <div className="contact-first">
          <div className='contact-heading'>
          <h2>Let's connect</h2>
          <i><BsArrowDownRight /></i>
          </div>
        <form>
          <input type="text" name='name' placeholder='Name'/>
          <input type="text" name='email' placeholder='Email'/>
          <textarea
          id="message"
          name="message"
          rows="5"
          cols="33"
          placeholder="I am looking for....."
        />
          <button>Send <span><IoIosArrowDroprightCircle /></span></button>
        </form>
      </div>
      <p className='contact-or'>Or</p>
      <div className="contact-second">
          <span>
            <Link to="https://m.soundcloud.com/yuvash-vaidya" className='links'>
              <p>Sound Cloud</p> 
              <BsArrowUpRight />
            </Link>
          </span>
          <span>
            <Link to="https://www.instagram.com/yuvashmusic/" className='links'>
              <p>Instagram</p> 
              <BsArrowUpRight />
            </Link>
          </span>
          <span>
            <Link to="https://web.whatsapp.com/" className='links'>
              <p>Whatsapp</p> 
              <BsArrowUpRight />
            </Link>
          </span>
      </div>
    <hr style={{marginTop:"10px"}}/>
    <div className="footers">
      <p>Copyright &copy;yuvash vaidhya</p>
      <p>Contact:9800000000</p>
    </div>
    </div>
    </>
  )
}

export default Contact