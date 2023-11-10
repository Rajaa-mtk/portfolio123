import { Link } from 'react-router-dom'
import TagComponent from '../components/App/tagComp'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { motion } from 'framer-motion'
import ProjectsBg from '../components/App/pagesBackground'

const Projects = () => {
  return (
    <motion.section className='section relative flex justify-center items-center' initial={{x: '100vw'}} animate={{x:0, transition:{type:'spring', mass:0.4, damping:8}}} exit={{ x: '-50vw', opacity:0,  transition:{ease: 'easeInOut', duration:2}}}>
      <TagComponent title='Projects' />
      <ProjectsBg />

      <div className='container flex flex-col py-4 lg:py-8 gap-y-8 z-40 min-h-[calc(100vh-190px)] justify-center'>
        <h1 className='text-center title text-[28px] lg:text-[45px]'>Previous Projects</h1>
        <p className='w-full max-w-[500px] mx-auto text-center text-[#1c1a1a]'>
          I've applied my skills on various projects to showcase my talent as a Front End Developer. These projects highlight my expertise in React, Javascript and other tools
        </p>
        <p className='w-full max-w-[500px] mx-auto text-center text-[#1c1a1a]'>If you'd like to explore my projects, <span className='text-pink font-bold'>click on the arrow below.</span> Excited to share them with you!</p>
        <Link to='/projectsdetails' className='text-[30px] w-fit mx-auto text-pink animate-bounce'><AiOutlineArrowRight /></Link> 
      </div>

    </motion.section>
  )
}

export default Projects