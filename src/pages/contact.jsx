import { motion } from 'framer-motion'
import TagComponent from '../components/App/tagComp'

const Contact = () => {
  return (
    <motion.section className='section relative flex justify-center items-center' initial={{x: '100vw'}} animate={{x:0, transition:{type:'spring', mass:0.4, damping:8}}} exit={{ x:'-50vw', opacity:0, transition:{ease: 'easeInOut', duration:2}}}>
      <TagComponent title='Contact' />

      <div className='container flex lg:flex-row flex-col py-4 lg:py-8 gap-y-8 gap-x-8 min-h-[calc(100vh-190px)] justify-center items-center'>
        <motion.div className='flex justify-center items-center origin-top' initial={{scale:0.3}} animate={{scale:1, transition:{ease:'linear' , duration:1, delay:0.3}}}>
          <img src='earth.png' alt='' className='max-h-[400px]' />
        </motion.div>
        <div className='flex flex-col lg:py-16'>
          <h1 className='title text-[25px]'>Have a question or want to work together?</h1>
          <p className='text-[20px] text-primary text-pink'>Contact Me</p>
          <h1 className='title text-[25px] mt-12 text-pink'>Rajaemoutiq@gmail.com</h1>
        </div>
      </div>
      
    </motion.section>
  )
}

export default Contact