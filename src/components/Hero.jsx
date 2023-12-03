import React from 'react'
import Socials from './Socials'
import Image from '../assets/3dprofile.jpg'
import FadeInAnimation from './FadeInAnimation'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
     <motion.section 
          initial="hidden"
          whileInView="visible"
          exit='visible'
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          variants={{
               visible: { opacity: 1, scale: 1 },
               hidden: { opacity: 0, scale: 0 }
          }}
          className='sm:relative z-0 w-full min-h-[calc(100vh-80px)] flex flex-col items-center justify-center'>
          <div className='w-[min(200px,90%)] p-3 aspect-square rounded-full border-2 border-slate-300/10 hover:border-violet-600/50 transition duration-300'>
               <img src={Image} alt="a picture of raheem" className='w-full aspect-square rounded-full object-cover'/>
          </div>
          <h1 className='text-2xl sm:text-3xl font-medium mt-8 text-center'>Hi, I'm <span className='text-violet-600 font-semibold'>Raheem</span> Orekoya</h1>
          <h2 className='text-lg sm:text-xl my-2 text-center'>Frontend Developer</h2>
          <p className='text-center max-w-lg'>
               Have a project idea? 
               Send me the details of your project for a modern, mobile responsive, 
               highly performant website now!
          </p>
          <a href="#">
               <button className='font-semibold px-8 py-4 rounded-lg mt-6 bg-violet-600 hover:bg-violet-800 transition duration-300'>Let's Talk!</button>
          </a>
     <Socials />
     </motion.section>
  )
}

export default Hero
