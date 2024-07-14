import React from 'react'
import './about.css'
import { motion } from 'framer-motion'
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';

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
        delay:0.1*i,
        duration:1
      }
  })
}

const data=[
  {
    text:"My journey as a pianist has been fueled by a passion"
  },
  {
    text:"for creating captivating musical compositions that balance technical prowess and emotional depth."
  },
  {
    text:" I am excited to continue this journey, leveraging my "
  },
  {
    text:"skills and experience excited to continue this journey,leveraging my skills and experience to evoke profound emotions and deliver exceptional performances."
  }
]
const About = () => {
  return (
    <div className='about-page'>
        <motion.div className="about-heading" 
          initial={{opacity:0,y:-50}}
          whileInView={{opacity:1,y:0,
            transition: { delay: 0.4, duration: 1 }
          }}
          viewport={{once:true}}
        >
          <h3>About our works</h3>
          <h3 className='about-btn'>
          <Link to='/about' className='link'>
            See more <MdOutlineArrowOutward />
          </Link>
          </h3>
        </motion.div>
        <hr className='breakline'/>
        <div className="about-content">
            {
              data.map((item,i)=>(
                <motion.p key={i} 
                variants={fadeIn} 
                initial="hidden" 
                whileInView="show" 
                viewport={{once:true}}
                custom={i}
                >
                  {item.text}
                  </motion.p> 
              ))
            }
        </div>
    </div>
  )
}

export default About