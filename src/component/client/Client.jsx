import React from 'react'
import './client.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode'
import { FreeMode, Pagination } from 'swiper/modules';
const data=[
  {
    heading:"Best performer of Western music",
    info:"Awarded best performer of Western music in the Diploma of Higher Education in Music (2016-2017) for exceptional talent and dedication."
  },
  {
    heading:"Winner of jazz - 2012 & 2013",
    info:"Winner of Jazz for the Next Generation in both 2012 and 2013 with Con-Tusion, showcasing exceptional skill and innovation."
  },
  {
    heading:"Winner of full scholarship",
    info:"Winner of a full scholarship from the U.S. Embassy's Black History Month program, recognized for exceptional musical talent and dedication to the arts, demonstrating outstanding potential and commitment to cultural heritage. "  
  },
  {
    heading:"Worked for apple event - Mumbai,India ",
    info:"Collaborated with Apple in Mumbai for an event featuring A.R. Rahman, demonstrating excellent event management skills and a passion for music promotion."
  },
  {
    heading:"Worked for Google - Delhi,India",
    info:"Participated in Google's 2018 keynote presentation in Delhi, contributing expertise and innovation, showcasing a dedication to advancing technology and digital solutions."
  }
]
const Client = () => {
  return (
    <div className='clients'>
      <div className='client-top'>
      <div className='dots'></div>
      <h2>Awaards</h2>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={40}
        freeMode={true}
        pagination={false}
        modules={[FreeMode, Pagination]}
        className='mySwiper'
      >
        {
          data.map((item,i)=>{
            return <SwiperSlide  key={i}>
              <div className='single-swiper'>
              <h3>{item.heading}</h3>
              <p>
              {item.info}
              </p>
              </div>
         </SwiperSlide>
          })
        }
        
     </Swiper>
    </div>
  )
}

export default Client