import React from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import LocomotiveScroll from 'locomotive-scroll';
import AboutMe from './page/AboutMe';
import Works from './page/Works';
import ContactUs from './page/ContactUs';

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutMe/>}/>
        <Route path='/works' element={<Works/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App