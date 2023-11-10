import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import {Home, About, Skills, Projects, ProjectSlider, Contact} from '../../pages/index'

const AnimRoutes = () => {
    const location = useLocation()

  return (
    <>
      <AnimatePresence initial={true} mode='wait' >
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projectsdetails' element={<ProjectSlider />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </AnimatePresence>

    </>
  )
}

export default AnimRoutes