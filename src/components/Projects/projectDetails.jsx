import { motion } from 'framer-motion'

const ProjectDetails = ({title, desc, skills, detail,image,href}) => {
  return (
    <div className='container flex flex-col lg:flex-row justify-center items-center py-4 lg:py-12 gap-y-12 gap-x-8 mb-8'>

      <motion.div className='flex flex-col gap-y-2 flex-1 order-2 lg:order-1' initial={{opacity:0}} whileInView={{opacity:1, transition:{ ease: 'easeInOut', duration:1}}}>
        <h1 className='title text-[28px] lg:text-[45px]'>{title}</h1>
        <h2 className='text-[12px] text-secondary text-[#2f2c2cc9]'>{desc}</h2>
        <p className='text-[#1c1a1a] mt-4 -tracking-[0.6px] leading-6'>
          {detail}
        </p>
        <ul className='flex items-center gap-x-2 mb-8 text-[#1c1a1a] font-bold flex-wrap'>
          {skills && skills.map((skill,index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <button className='w-fit btn-secondary  text-white'>
          <a  href={href} target="_blank" className='flex gap-x-2 items-center'>
            Vsiti the App
          </a>
        </button>
      </motion.div>

      <motion.div className='flex-1 flex justify-center order-1 items-center lg:order-2' initial={{scale:0, opacity:0}} whileInView={{scale:1, opacity:1, transition:{ ease: 'easeInOut', duration:1}}}>
        <img src={image} alt='' className='h-auto w-full' />
      </motion.div>

  </div>
  )
}

export default ProjectDetails