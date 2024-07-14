import React from 'react'
import './Footer.css'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { CiGlobe } from "react-icons/ci";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div style={{display:'flex',flexDirection:"column", gap:"10px",fontSize:"30px",fontWeight:"900"}}>
            <Link to={'/works'} style={{textDecoration:"none",color:"#fff"}}>
            <h3 style={{cursor:"pointer"}}>Work</h3>
            </Link>
            <Link to={'/About'} style={{textDecoration:"none",color:"#fff"}}>
            <h3 style={{cursor:"pointer"}}>About</h3>
            </Link>
            <Link to={'/contact'} style={{textDecoration:"none",color:"#fff"}}>
            <h3 style={{cursor:"pointer"}}>Contact</h3>
            </Link>
        </div>
        <div style={{width:"400px",height:"100%",display:"flex",flexDirection:'column',gap:"30px"}}>
            <p style={{fontSize:"20px"}}>Get creative ideas to enhance your playing and performances.</p>
            <div style={{display:"flex",height:"35px",width:"350px",alignItems:"center",borderBottom:"1px solid white"}}>
              <input type="text" placeholder='Email Address' style={{height:"100%",width:"85%",padding:"0px 20px",outline:"none",color:"#fff",backgroundColor:"transparent",fontSize:"18px",border:"none"}}/>
              <i style={{fontSize:"30px",display:"flex",justifyContent:"center",marginLeft:"10px",cursor:"pointer"}}><HiOutlineArrowNarrowRight /></i>
            </div>
        </div>
      </div>
      <div className="footer-mid">
        <p>Yuvash</p>
        <h1>Vaidya</h1>
      </div>
      <div className="footer-bottom">
        <hr />
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 0px",marginTop:"20px",fontSize:"20px"}}>
          <p>Copyright &copy; yuvash vaidhya</p>
          <p style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"}}><span style={{marginTop:"3px"}}><CiGlobe /></span> Kathmandu,Nepal</p>
          <Link to="https://www.instagram.com/yuvashmusic/" style={{textDecoration:"none",color:"#fff"}}>
          <p>Instagram</p>
          </Link>
          <Link to="https://m.soundcloud.com/yuvash-vaidya" style={{textDecoration:"none",color:"#fff"}}>
          <p>Sound Cloud</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer