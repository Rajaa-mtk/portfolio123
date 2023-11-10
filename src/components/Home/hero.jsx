import { AiOutlineArrowRight } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const boxVariants = {
    hidden:{
        clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)'
    },
    visible:{
        clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)',
        transition:{
            type:'tween', duration:1, ease: [0.25, 0.25, 0.25, 0.75]
        }
    },
    exit:{
        x:'-50%',
        opacity:0,
        transition:{
            delay:0.2, duration:1.5, ease: 'easeInOut'
        }
    }

}

const Hero = () => {
    const arr = ['Front-End', 'Software', 'Developer']
  return (
    <motion.div 
       className='relative w-full flex-[50%] flex-col flex justify-center gap-y-8 lg:py-0'
       variants={boxVariants} initial='hidden' animate={'visible'} exit={'exit'}
    >

        <div className='flex gap-x-4  font-primary select-none flex-wrap gap-y-4'>
            {arr.map((item, index) => (
                <h1 key={index} className='flex text-[35px] font-bold drop-shadow-lg leading-[28px]' >
                    {Array.from(item).map((letter,index) => (
                       <motion.span key={index} whileHover={{color: '#ff007b', scale: [0.8, 1] , transition:{type:'spring', damping:1}}}>{letter}</motion.span>
                    ))}
                </h1>
            ))}
        </div>

        <p>Resolving design problems, building smart user interfaces and useful interactions, developing rich web applications and seamless web experiences.</p>
        
        <button className=' w-fit btn-secondary group'>
            <Link to='/about' className='flex gap-x-2 items-center'>
               About me 
               <AiOutlineArrowRight className='font-bold text-[20px] animate-bounce text-white group-hover:text-pink'/>
           </Link>
        </button>

    </motion.div>
  )
}

export default Hero