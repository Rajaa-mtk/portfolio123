import { motion } from 'framer-motion'
const Loader = () => {

    const conContainerVariants = {
        hidden:{
            x:0
        },
        visible:{
            x: '100vw',
            transition:{
              ease: [0.25, 0.25, 0.25, 0.75],
              type: 'spring',
              duration: 1,
              delay:0.1
            }
        }
    }

  return (
    <>
      <motion.div className='fixed top-0 left-0 h-screen w-screen z-[100] bg-[#002d6b]' initial={{opacity:1}} animate={{opacity:0, x:'100vw', transition:{dease:'linear', duration:1}}}></motion.div>
      <motion.div 
        className='fixed top-0 left-0 h-screen w-screen z-[100] bg-pink flex flex-col justify-center items-center'
        variants={conContainerVariants} initial='hidden' animate={'visible'}
      >
        <div className='font-primary text-[30px] font-bold flex gap-x-2 items-center' >
          <span className='text-white'>RM</span>
          <span className='w-[4px] h-[25px] bg-primary inline-block'></span>
          <span>PORTFOLIO</span>
        </div>

      </motion.div>
    </>
  )
}

export default Loader