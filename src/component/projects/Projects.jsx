import React, { useState } from 'react'
import './projects.css'
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';
const data=[
    {
        text:"The Glorious Exit",
        image:"/image/Photo1.jpeg"
    },
    {
        text:"Nightrider",
        image:"/image/Photo2.jpeg"
    },
    {
        text:"Avatar",
        image:"/image/Photo3.jpeg"
    },
    {
        text:"Shreeti(arr. Yuvash)",
        image:"/image/Photo4.jpeg"
    },
    ,
    {
        text:"You Don't Know What Love Is",
        image:"/image/Photo1.jpeg"
    },
    {
        text:"Give You My Love",
        image:"/image/Photo2.jpeg"
    },
]
const Projects = () => {
    const [hoveredImage, setHoveredImage] = useState(null);
    const [isImageVisible, setIsImageVisible] = useState(false);
    const [currentHoveredIndex, setCurrentHoveredIndex] = useState(null);

    const handleMouseEnter = (image, index) => {
    if (currentHoveredIndex !== index) {
      setHoveredImage(image);
      setIsImageVisible(true);
      setCurrentHoveredIndex(index);
    }
    };

    const handleMouseLeave = () => {
    setIsImageVisible(false);
    setCurrentHoveredIndex(null);
    };
  return (
    <>
    <div className='fixed-image'  style={{ opacity: isImageVisible ? 1 : 0, transition: 'opacity 0.5s ease-in-out' ,pointerEvents: 'none'}}>
    {hoveredImage && <img src={hoveredImage} alt="Hovered"/>}
        </div>
    <div className='project-page'>
        <div className='project-top'>
            <div className="dots"></div>
            <h2>Featured Projects</h2>
        </div>
        <div className="project-lists">
            {data.map((item,i)=>{
                return <div className='solo-projects' key={i} onMouseEnter={() => handleMouseEnter(item.image, i)}
                onMouseLeave={handleMouseLeave}>
                <div className='overlay'></div>
                <h2>{item.text}</h2>
            </div>
            })}
            
        </div>
        <button className='project-btn'>
            <Link to='/works' className='link-btn'>
            <h3>All Projects</h3>
            <span><HiArrowLongRight /></span>
            </Link>
        </button> 
    </div>
    </>
  )
}

export default Projects
