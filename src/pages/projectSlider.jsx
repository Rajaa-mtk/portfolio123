import React from 'react'
import ProjectDetails from '../components/Projects/projectDetails'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination} from 'swiper/modules';
import { motion } from 'framer-motion'

import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/pagination'

const ProjectSlider = () => {
  const skills = ['React.js', 'Responsive Web', 'Javascript', 'API integration', 'Tailwind CSS', 'Framer motion', 'Firebase', ]

  return (
    <motion.section 
      className='section flex justify-center items-center'
      initial={{x: '100vw', opacity:0}} animate={{x:0, opacity:1, transition:{ type: 'spring', mass:0.4, damping: 6 }}} exit={{x:'-50vw', opacity:1, transition:{ ease: 'easeInOut', duration:2 }}}
    >
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        spaceBetween={50} 
        style={{
          "--swiper-pagination-color": "#ff007b",
          "--swiper-pagination-bullet-inactive-color": "#002d6b",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "10px",
        }}
      >
        <SwiperSlide>
          <ProjectDetails title='Starbucks' desc='E-COMMERCE APPLICATION' detail='Check out my Starbucks-inspired website demo that i created for my portfolio' skills={skills} image={'starbucksdevice.png'} href='https://fir-starbucks-3eb22.web.app' />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectDetails title='DriveLux' desc='RENTAL CAR APPLICATION' detail='Check out my Rental Car website for renting Luxury cars' skills={skills} image={'driveLuxdevice.png'} href='https://drivelux-ed29b.web.app' />
        </SwiperSlide>
      </Swiper>
    </motion.section>
  )
}

export default ProjectSlider