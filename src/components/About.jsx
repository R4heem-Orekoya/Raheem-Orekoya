import React from 'react'
import { FileDown } from 'lucide-react'
import Image from '../assets/3dprofile.jpg'
import FadeInAnimation from './FadeInAnimation'
import { motion } from 'framer-motion'

const About = () => {
  return (
     <section>
        <FadeInAnimation>
          <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>Who I Am</h2>
        </FadeInAnimation>

        <div className='grid  grid-cols-1 lg:grid-cols-2 gap-8 md:px-12 mt-16'>
          <FadeInAnimation>
            <div className='col-span-1'>
              <img src={Image} alt="raheem orekoya" className='max-w-lg w-full aspect-[9/11] mx-auto rounded-xl object-cover border-2 border-slate-300/20'/>
            </div>
          </FadeInAnimation>

          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
                  visible: { opacity: 1 },
                  hidden: { opacity: 0}
            }}
            className='col-span-1 flex flex-col justify-center'>
            <h3 className='text-sm text-violet-600 font-semibold'>About Me</h3>
            <h4 className='text-2xl lg:text-3xl my-4'>Raheem Orekoya</h4>
            <p className='sm:text-justify tracking-wide'>
              I am a skilled frontend web developer hailing from Nigeria, 
              i blend coding and design to create captivating user interfaces. 
              I am currently pursuing a computer science degree, my passion 
              lies in crafting innovative digital experiences that merge 
              technology and creativity. I aspire to revolutionize the web 
              with my unique skill set.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full'>
              <div className='h-[70px] flex flex-col justify-center px-4 rounded-lg border-l-8 border-violet-600 bg-[#0F1117]'>
                <h5 className='font-semibold mb-1'>Skills</h5>
                <p className='text-xs'>HTML, CSS, Javascript, Tailwind, React</p>
              </div>
              <div className='h-[70px] flex flex-col justify-center px-4 rounded-lg border-l-8 border-violet-600 bg-[#0F1117]'>
                <h5 className='font-semibold mb-1'>Experience</h5>
                <p className='text-xs'>4+ years of working experience</p>
              </div>
              <div className='h-[70px] flex flex-col justify-center px-4 rounded-lg border-l-8 border-violet-600 bg-[#0F1117]'>
                <h5 className='font-semibold mb-1'>Projects</h5>
                <p className='text-xs'>20+ completed projects</p>
              </div>
              <div className='h-[70px] flex flex-col justify-center px-4 rounded-lg border-l-8 border-violet-600 bg-[#0F1117]'>
                <h5 className='font-semibold mb-1'>Clients</h5>
                <p className='text-xs'>20+ Happy Clients</p>
              </div>
            </div>

            <a aria-label="Raheem's Resume download link" href="#">
              <button className='mt-8 px-8 py-4 flex items-center gap-2 bg-violet-600 rounded-lg hover:bg-violet-800 transition duration-300 font-semibold'>
                <FileDown size={20} strokeWidth={2}/>
                Download CV
              </button>
            </a>
          </motion.div>
        </div>
     </section>
  )
}

export default About
