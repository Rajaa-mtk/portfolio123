import { skillsData } from '../Data/data'
import { motion } from 'framer-motion'
import TagComponent from '../components/App/tagComp'
import ProjectsBg from '../components/App/pagesBackground'

const Skills = () => {
    
    const iconContainerVariants = {
      hidden:{
        opacity:0
      },
      visible:{
        opacity:1,
        transition:{
          staggerChildren: 0.2,
          delayChildren: -0.7,
        }
      }
    }

    const iconsVariants ={
      hidden:{
        y:'50px'
      },
      visible:{
        y:0,
        transition:{
          duration:0.5,
          ease: 'linear'
        }
      }
    }
  
  return (
    <motion.section className='section relative' initial={{x: '100vw'}} animate={{x:0, transition:{type:'spring', mass:0.4, damping:8}}} exit={{ x:'-50vw', opacity:0, transition:{ease: 'easeInOut', duration:2}}}>
      <TagComponent title='Skills' />
      <ProjectsBg />
      <div className='container flex flex-col py-4 lg:py-8 gap-y-8 min-h-[calc(100vh-190px)] justify-center'>
        <h1 className='text-center title text-[28px] lg:text-[45px]'>Skills</h1>
        <p className='w-full max-w-[500px] mx-auto text-center text-[#1c1a1a]'>As a Front End Developer specializing in React, Javascript, and Next js. I have a strong foundation in building modern and interactive web applications</p>
        <p className='w-full max-w-[500px] mx-auto text-center text-[#1c1a1a]'>Here are some of my key <span className='font-bold text-pink'>skills</span></p>
        <motion.div 
          className='grid justify-center items-center lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-8 gap-y-8'
          variants={iconContainerVariants} initial='hidden' whileInView={'visible'}
        >
          {skillsData && skillsData.map((skill,index) => (
            <motion.div
              key={index} 
              className='flex flex-col justify-center items-center gap-y-4'
              variants={iconsVariants}
            >
              <span className='text-[60px]'>{skill.icon}</span>
              <h1 className='title text-[16px] text-pink'>{skill.name}</h1>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  ) 
}

export default Skills