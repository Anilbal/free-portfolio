import React from 'react'
import LandingVideo from '../component/LandingPage/LandingVideo'
import Navbar from '../component/navbar/Navbar'
import About from '../component/About/About'
import Content from '../component/LandingPage/Content'
import Experience from '../component/experience/Experience'
import Projects from '../component/projects/Projects'
import Contact from '../component/contact/Contact'
import Client from '../component/client/Client'
import '../App.css'
import Loader from '../component/loader/Loader'
const Home = () => {
  return (
    <>
        <Loader/>
        <LandingVideo/>
        <div style={{color:"white"}}>
        <Navbar/> 
        </div> 
        <About/>
        <Experience/>
        <Projects/>
        <Client/>
        <Contact/>
    </>
  )
}

export default Home