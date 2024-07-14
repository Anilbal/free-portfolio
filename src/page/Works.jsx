import React, { useState } from 'react'
import '../page-css/works.css'
import Navbar from '../component/navbar/Navbar'
import {motion} from 'framer-motion'
import Footer from '../component/footer/Footer'
const fadeIn={
  hidden:{
    opacity:0,
    y:100
  },
  show:(i)=>({
    opacity:1,
    y:0,
    transition:{
      delay:0.2*i,
      duration:1
    }
  })
}

//mapping data
const data=[
  {
    text:"Each recital has been a journey of expression,"
  },
  {
    text:"captivating audiences and earning acclaim for its artistic depth and technical precision. My collaborative performances "
  },
  {
    text:"with renowned orchestras have been celebrated for their dynamic synergy and musical excellence."
  }
]

//for random height of images
const images=[
  {
        text:"The Glorious Exit",
        image:"Photo1.jpeg"
    },
    {
        text:"Nightrider",
        image:"Photo2.jpeg"
    },
    {
        text:"Avatar",
        image:"Photo3.jpeg"
    },
    {
        text:"Shreeti(arr. Yuvash)",
        image:"Photo4.jpeg"
    },
    {
        text:"You Don't Know What Love Is",
        image:"Photo1.jpeg"
    },
    {
        text:"Give You My Love",
        image:"Photo2.jpeg"
    },
]
const Works = () => {

  const [show,setShow]=useState(false)

  const handleShow=()=>{
    if(window.scrollY>=950 && window.scrollY<=3200){
      setShow(true)
    }else{
      setShow(false)
    }
  }
  window.addEventListener("scroll",handleShow)
  console.log(show)
  return (
    <>
    <div style={{color:"black"}}>
    <Navbar/>
    </div>
    <div className='works-main'>
      <div className="main-top">
        {
          data.map((item,i)=>(
            <motion.p 
            key={i} 
            variants={fadeIn} 
            initial="hidden" 
            whileInView="show" 
            viewport={{once:true}}
            custom={i}
            >{item.text}</motion.p>
          ))
        }
        <p></p>
      </div>
      <div className="project-images">
        <h1 style={{textAlign:'center',fontSize:"60px",padding:"80px 0px",fontWeight:"100"}}>Explore my works</h1>
        <h2 className={show?"fixed-text visible":"fixed-text"}>All Projects</h2>
          <div className="image-container">
              {
                images.map((item,i)=>{
                  return <div className={`single-image image-${i+1}`} key={i}>
                  <div className="project-content">
                    {item.text}
                  </div>
                  <img src={`../image/${item.image}`} alt="" />
              </div>
                })
              }
          </div>
      </div>
      <hr />
      <Footer/>
    </div>
    </>
  )
}

export default Works