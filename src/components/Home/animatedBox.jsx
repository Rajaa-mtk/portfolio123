import { motion } from 'framer-motion'
import { Transition1, Transition2 } from '../../transition'
import image1 from '../../Data/Images/resume.jpg'
import image2 from '../../Data/Images/womendev.png'


const AnimatedBox = () => {
  return (
    
  <motion.div 
    className='w-full overflow-hidden flex-[50%] flex justify-center items-center'
    initial={{scale: 0}} animate={{scale: 1, transition: {type:'tween', duration:0.5, ease: [0.25, 0.25, 0.25, 0.75]}}} exit={{x: '-50%', opacity:0, transition: {duration:1.5, ease: 'easeInOut'}}}
  >
    <div className='relative max-w-[350px] w-[350px] h-[280px] lg:h-[400px]  max-h-[400px]'>

      <motion.div
        className='w-[200px] h-[300px] bg-[#ff007b] rounded-tl-[30%] absolute left-0 z-10 shadow-4xl'
        animate={{
          borderRadius: ['0%', '50%', '0', ' 0','50%','0%'],
          borderTopLeftRadius: ['30%', '50%','0', '0','50%','30%'],
          height: ['300px', '200px', '400px', '400px','200px','300px'],
          width: ['200px', '200px','350px', '350px','200px','200px'],
          top:['100px', '30px','24px', '24px','30px','100px'],
          transition: Transition1
        }}
      />

      <motion.div
        className='w-[250px] h-[300px] bg-[#f5c7f7] rounded-tl-[30%] rounded-br-[30%] absolute left-[100px] z-0'
        animate={{
          top:['0px', '124px', '124px', '124px', '124px','0px'],
          width: ['250px', '200px', '200px', '200px', '200px','250px'],
          height: ['300px', '250px', '250px', '250px', '250px','300px'],
          transition: Transition1
        }}
      />

      <motion.div 
        className='absolute w-full h-full bg-[#ff007b] z-40'
        animate={{
          top: ['500px', '24px', '24px', '24px', '500px'],
          opacity:[0, 1, 1, 1, 0],
          transition: Transition2
        }}
      >

        <motion.img
          src={image1} 
          alt='resume' 
          className='z-50 absolute -top-6 -left-4 w-full h-[380px]'
          animate={{
            top: ['400px', '-24px', '-24px', '-24px', '400px'],
            transition: Transition2
          }}
       
        />
      </motion.div>

      <motion.div className='absolute w-full h-full z-50 top-0 left-0'
        animate={{
          left:['0px', '400px', '400px', '400px', '400px', '0px'],
          opacity: [1, 0, 0, 0, 0, 1],
          transition:{
          delay:1,
          duration:3,
          times:[0, 0.1, 0.2, 0.4, 0.8, 0.9],
          repeat: Infinity,
          repeatDelay: 1.5,
          }
        }}
      >
        <img src={image2} alt='female' className='h-full' />
      </motion.div>

    </div>
    
  </motion.div>  )
}

export default AnimatedBox