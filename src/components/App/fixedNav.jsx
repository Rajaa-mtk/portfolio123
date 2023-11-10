import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FixNavData } from '../../Data/data'



const FixedNav = () => {
    const [active, setActive] = useState(false)
    const [barMove, setBarMove] = useState(0)

    const handleMouse = (index) => {
        setActive(true)
        setBarMove(75*index)    
    }

    const barVariants = {
        hidden:{
            top: 0,
        },
        visible:{
            top: active ? `${barMove}px` : '',
            transition:{
                duration: 0.5,
                ease: 'linear'
            }
        }
    }
  return (
    <ul 
      className='fixed flex justify-between items-center lg:flex-col bg-white h-[50px] w-full max-w-[500px] bottom-0 z-50 left-[50%] -translate-x-[50%] lg:translate-x-0 lg:-translate-y-[50%]  lg:top-[50%] lg:right-8 lg:left-auto lg:w-fit lg:h-[300px] lg:border-r-4 lg:border-[#002d6b52] lg:bg-body-bg p-4 lg:pr-4 lg:p-0 lg:rounded-none rounded-tr-[100px] rounded-tl-[100px]'
      onMouseLeave={() => { setBarMove(0) }}
    >
        <motion.div className='absolute lg:h-[75px] lg:w-1 bg-primary top-0 -right-1' variants={barVariants} initial='hidden' animate={'visible'}></motion.div>
        {FixNavData&& FixNavData.map((item, index) => (
           <li key={index} className='lg:h-[calc(300px/4)] flex justify-center items-center'>
              <Link to={item.href} onMouseEnter={() => handleMouse(index)}>{item.name}</Link>
            </li>
        ))}
    </ul>
  )
}

export default FixedNav