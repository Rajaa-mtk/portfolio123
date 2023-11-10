import { motion } from 'framer-motion'


const ProjectsBg = () => {
  return (
    <>
        <div className=' hidden lg:block z-30 absolute top-[100px] left-[200px] w-[40px] opacity-[0.2] h-[40px] animate-pulse'>
          <img src='html5.png' alt='tag' className='w-full h-full object-contain' />
        </div>
        <motion.div 
           className='hidden lg:block z-30 absolute bottom-[100px] right-[50px] w-[90px] opacity-[0.6] h-[70px] animate-pulse'
           exit={{right:'200px', opacity:0, transition:{ease: 'easeInOut', duration:3}}}        
        >
          <img src='tag.png' alt='tag' className='w-full h-full object-cover' />
        </motion.div>
        <motion.div 
           className='hidden lg:block z-30 absolute top-[100px] right-[120px] w-[100px] opacity-[0.2] h-[200px] animate-pulse'
           exit={{right:'300px', opacity:0, transition:{ease: 'easeInOut', duration:3}}}        
        >
          <img src='developer.png' alt='tag' className='w-full h-full object-contain' />
        </motion.div>
        <div className='hidden lg:block z-30 absolute bottom-[100px] right-[70%] w-[100px] opacity-[0.2] h-[200px] animate-pulse'>
          <img src='web-development.png' alt='tag' className='w-full h-full object-contain' />
        </div>
    </>
  )
}

export default ProjectsBg