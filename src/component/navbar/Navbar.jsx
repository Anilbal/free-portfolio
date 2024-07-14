import React, { useState } from 'react'
import './navbar.css'
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [open,setOpen]=useState(false)
  console.log(open)
  return (
    <>
    <div className={open==false?'nav-top nav-move':"nav-top"}>
        <h3>Yv .</h3>
        <div className='top-details'>
          <Link to="/" className='link'>
            <h2>Home</h2>
          </Link>
          <Link to="/works" className='link'>
            <h2>Works</h2>  
          </Link>
          <Link to="/about" className='link'>
            <h2>About</h2>
          </Link>
          <Link to="/contact" className='link'>
            <h2>Contact</h2>
          </Link>
        </div>
        <h4 onClick={()=>setOpen(!open)}>Close<span><RxCross2/></span></h4>
    </div>
    <nav>
        <h3>Yv .</h3>
        <h4 onClick={()=>setOpen(!open)}>Menu</h4>
    </nav>
    </>
  )
}

export default Navbar