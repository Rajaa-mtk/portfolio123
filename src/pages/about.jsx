import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import { AiOutlineArrowRight } from 'react-icons/ai'
import { RiRadioButtonLine } from 'react-icons/ri'

import TagComponent from '../components/App/tagComp'
import { aboutData } from '../Data/data'
import ProjectsBg from '../components/App/pagesBackground'

const About = () => {
  const sectionVariants = {
    hidden:{
      x:'100vw'
    },
    visible:{
      x:0,
      transition:{
        type: 'spring',
        mass:0.4,
        damping:8,
      }
    },
    exit:{
      x:'-50vw',
      opacity:0,
      transition:{
        ease: 'easeInOut',
        duration:2,
      }
    }
  }
  
  return (
    <motion.section className='section relative flex justify-center items-center' variants={sectionVariants} initial='hidden' animate={'visible'} exit={'exit'}>
      <TagComponent title='About' />
      <ProjectsBg />

      <div className='container flex flex-col justify-center items-center py-4 lg:py-8 gap-y-14 gap-x-4 min-h-[calc(100vh-190px)]'>

        <div className='flex lg:gap-x-8 flex-col lg:flex-row flex-[50%] items-center justify-center'>
          <div className='mb-4'>
            <h1 className='text-[25px] lg:text-[40px] font-bold mb-4 leading-[45px]'>Hello, I'm <span className='text-pink'>Rajaa Moutiq.</span></h1>
            <div className='flex  items-center gap-x-2 text-[#6e829c] text-[12px] -mt-4'>
              <RiRadioButtonLine className='text-[#42b883] animate-ping'  /> Currently in Charlotte, NC
            </div>
          </div>
          <div className='flex flex-col gap-y-4'>
            <p className='w-full max-w-[500px]'>I hold a master's degree in Finance from a Business & Engineering school.<br/>
              I successfully transitioned into the field of web development after a dedicated journey of continuous learning. Now, I confidently build fast, responsive, intuitive and dynamic websites using React.js, Next.js and add cool animations.
            </p>
            <button className=' w-fit btn-secondary group'>
              <Link to='/skills' className='flex gap-x-2 items-center'>
                Skills
                <AiOutlineArrowRight className='font-bold text-[20px] animate-bounce text-white group-hover:text-pink'/>
              </Link>
            </button>
          </div>
        </div>

        <div className='flex-[50%] grid grid-cols-2 lg:grid-cols-4 gap-y-8 justify-between items-center w-full'>
          {aboutData && aboutData.map((item,index) => (
            <div key={index} className='flex flex-col items-center gap-y-2'>
              <div className='clipPath relative bg-white flex justify-center text-white items-center text-primary w-[100px] h-[100px]'>
                <motion.div className='absolute top-0 left-0 w-full h-full bg-primary' initial={{y:'100%'}} animate={{y:0, transition: {ease:'linear', delay:0.5, duration:1}}} ></motion.div>
                <span className='z-50 text-[30px]'>{item.icon}</span>
              </div>
              <motion.h2 
                className='font-bold text-[18px]'
                initial={{opacity:0}} animate={{opacity:1,transition:{ease:'linear', duration: 0.5, delay:1}}}
              >
                {item.title}
              </motion.h2>
            </div>
          ))}
        </div>


      </div>
    </motion.section>
  )
}

export default About