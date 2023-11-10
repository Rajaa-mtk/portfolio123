import React, { useEffect, useState } from 'react'
import AnimatedBox from '../components/Home/animatedBox'
import Hero from '../components/Home/hero'

const Home = () => {
  const [active, setActive] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setActive(true)
      
    },100);

  },[])
  return (
    <section className='section'>
      {active && (
        <div className='w-full h-full container flex flex-col lg:flex-row justify-between items-center py-16 lgpy-8 gap-y-12 gap-x-4'>
          <AnimatedBox />
          <Hero />
        </div>
      )}
    </section>
  )
}

export default Home