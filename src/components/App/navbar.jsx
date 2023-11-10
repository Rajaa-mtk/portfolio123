import { Link } from 'react-router-dom'
import {AiFillLinkedin} from 'react-icons/ai'
import { motion } from 'framer-motion'

const navVariants = {
  hidden:{
    y: '-120px'

  },
  visible:{
    y:0,
    transition:{
      ease: 'linear',
      duration:0.8,
    }
  }

}

const Navbar = () => {
  return (
    <motion.nav 
      className='flex items-center justify-between py-8 lg:h-[120px] h-[105px]'
      variants={navVariants} initial='hidden' animate={'visible'}
      >

        <Link to='/portfolio123' className='flex-1 font-primary text-primary md:text-[20px] font-bold flex gap-x-2 items-center'>
            <span className='text-pink'>RM</span>
            <span className='w-[4px] h-[26px] bg-primary inline-block'></span>
            <span>PORTFOLIO</span>
        </Link>

        <Link to='/contact'><button className='mr-8 btn-primary hidden md:block'>Contact</button></Link>

        <a href='https://www.linkedin.com/in/rajaa-m-989324151' target='_blanket' className='text-[30px]'><AiFillLinkedin /></a>
    </motion.nav>
  )
}

export default Navbar