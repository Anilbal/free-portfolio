import React from 'react'
import './landingVideo.css'
import Content from './Content'
const LandingVideo = () => {
  return (
    <>
    <div className='video-page'>
        <video autoPlay loop muted src='../landing.mp4'></video>
    </div>
    <Content/>
    </>
  )
}

export default LandingVideo