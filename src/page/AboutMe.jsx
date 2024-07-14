import React, { useEffect, useRef } from 'react'
import Navbar from '../component/navbar/Navbar'
import Footer from '../component/footer/Footer'
import '../page-css/about-page.css'
import { motion,useScroll, useTransform } from 'framer-motion'
import { BsArrow90DegRight } from "react-icons/bs";

//for fadeinUp effect
const fadeIn={
  hidden:{
    opacity:0,
    y:100
  },
  show:(i)=>({
    opacity:1,
    y:0,
    transition:{
      delay:0.5*i,
      duration:1
    }
})
}

const images=[
  "https://images.pexels.com/photos/4088786/pexels-photo-4088786.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2296100/pexels-photo-2296100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/164737/pexels-photo-164737.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/164743/pexels-photo-164743.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/20190848/pexels-photo-20190848/free-photo-of-people-playing-on-piano.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/4038317/pexels-photo-4038317.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/4038335/pexels-photo-4038335.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/3825752/pexels-photo-3825752.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/4088819/pexels-photo-4088819.jpeg?auto=compress&cs=tinysrgb&w=600"
]
const AboutMe = () => {
  const container=useRef(null)
  const {scrollYProgress} =useScroll({
    target:container,
    offset:['start end',"end start"]
  })

  const y1=useTransform(scrollYProgress,[0,1],[0,190])
  // const y2=useTransform(scrollYProgress,[0,1],[0,100])
  const y3=useTransform(scrollYProgress,[0,1],[0,300])
  return (
    <>
      <Navbar/>
      <div className="about-main">
      <div className="aboutme-page"ref={container}>
          <motion.div className="column" style={{y:y1}}>
            {
              images.slice(0,3).map((item,i)=>{
                return <img src={item} alt={`image ${i}`} />
              })
            }
          </motion.div>
          <motion.div className="column">
          {
              images.slice(3,6).map((item,i)=>{
                return <img src={item} alt={`image ${i}`} />
              })
            }
          </motion.div>
          <motion.div className="column" style={{y:y3}}>
          {
              images.slice(6,9).map((item,i)=>{
                return <img src={item} alt={`image ${i}`} />
              })
            }
          </motion.div>
      </div>
      <div className="about-middle">
        Yuvash Vaidya, also an Indigenous Newah, is an aspiring pianist  with an advanced diploma in Western classical music. He is enthusiastic about promoting Newah art and culture through
        music.Currently he is involved in a jazz electronic trio called Realized
        Beings, doing studio sessions for other musicians and artists
        and regularly collaborates with young professionals in the
        music industry.
      </div>
      <div className="about-middle">
        <p>Join us <span><BsArrow90DegRight /></span></p>
        <motion.h3 initial={{
          opacity:0,
          y:100
        }}
        whileInView={{
          opacity:1,
          y:0,
          transition:{
            delay:0.2,
            duration:1
          }
        }}
        >user@user.com</motion.h3>
      </div>
      <div className="about-bottom">
          <div className="bottom-content">
          <h2>We excels in performing intricate compositions, blending technical skill with emotional depth to create captivating musical experiences.</h2>
          </div>
          <div className="about-fix">
            {
              images.map((item,i)=>(
                <motion.div key={i}
                variants={fadeIn} 
                initial="hidden" 
                whileInView="show" 
                viewport={{once:true}}
                custom={i} 
                className='cards'>
                  <img src={item} alt="" />
                </motion.div>
              ))
            }     
          </div>
      </div>
      <Footer/>
      </div>
    </>
  )
}

export default AboutMe