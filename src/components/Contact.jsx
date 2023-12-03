import React from 'react'
import { Mail, Instagram, MessageCircle } from 'lucide-react'
import Whatsapp from '../assets/whatsapp.svg'
import FadeInAnimation from './FadeInAnimation'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
     <section>
          <FadeInAnimation>
               <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>Contact Me!</h2>
          </FadeInAnimation>

          <div className='mt-16 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-10 lg:px-16'>
               <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5 }}
                    variants={{
                         visible: { opacity: 1 },
                         hidden: { opacity: 0}
                    }}
                    className='col-span-1 flex flex-col items-center justify-center gap-4 p-8 border-2 border-slate-300/10 hover:border-violet-600/40 transition duration-300 rounded-xl'>
                    <Mail />
                    <h3 className='text-violet-600 text-xl font-semibold'>Email</h3>
                    <p className='tracking-wide'>raheemorekoya1@gmail.com</p>
               </motion.div>
               <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5 }}
                    variants={{
                         visible: { opacity: 1 },
                         hidden: { opacity: 0}
                    }}
                    className='col-span-1 flex flex-col items-center justify-center gap-4 p-8 border-2 border-slate-300/10 hover:border-violet-600/40 transition duration-300 rounded-xl'>
                    <Instagram />
                    <h3 className='text-violet-600 text-xl font-semibold'>Instagram</h3>
                    <p className='tracking-wide'>redoxx.code</p>
               </motion.div>
               <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5 }}
                    variants={{
                         visible: { opacity: 1 },
                         hidden: { opacity: 0}
                    }}
                    className='col-span-1 flex flex-col items-center justify-center gap-4 p-8 border-2 border-slate-300/10 hover:border-violet-600/40 transition duration-300 rounded-xl'>
                    <img src={Whatsapp} alt="whatsapp logo" className='w-[30px] aspect-square object-cover'/>
                    <h3 className='text-violet-600 text-xl font-semibold'>Whatsapp</h3>
                    <p className='tracking-wide'>+234-70-147-276-1</p>
               </motion.div>
          </div>
     </section>
  )
}

export default Contact
