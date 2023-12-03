import React from 'react'
import Image1 from '../assets/project1.png'
import Image2 from '../assets/project2.png'
import Image3 from '../assets/project3.png'
import Image4 from '../assets/project4.png'
import { Radio } from 'lucide-react'
import { motion } from 'framer-motion'
import FadeInAnimation from './FadeInAnimation'

const Projects = () => {
  return (
     <section>
          <FadeInAnimation>
               <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>What I've Built</h2>
          </FadeInAnimation>

          <div className='mt-16 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
               <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5, delay: 0.3 }}
                    variants={{
                         visible: { opacity: 1 },
                         hidden: { opacity: 0}
                    }}
                    className='relative col-span-1 aspect-square rounded-lg border-2 border-slate-300/10 hover:border-violet-600/40 overflow-hidden group'>
                    <img src={Image1} alt="image preview of a quiz app made with react" className='w-full h-full object-cover' />
                    <div className='absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center px-8 bg-black/60 backdrop-blur-lg opacity-0 group-hover:opacity-100 transition duration-300'>
                         <h3 className='text-2xl font-semibold text-violet-600'>Quiz App</h3>
                         <p className='text-lg my-6 font-thin'>
                              This is a simple quiz app that i built with react, 
                              it was carefully styled with tailwind css. This project 
                              is special to me because it's the first project i built after 
                              learning react.
                         </p>
                         <a aria-label="Link to Raheem's quiz application" href="https://r4heem-orekoya.github.io/React-Quiz-App/" className='flex items-center gap-2 text-lg font-medium hover:underline underline-offset-4'>
                              <Radio className='stroke-red-600'/>
                              Go Live
                         </a>
                    </div>
               </motion.div>
               <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5, delay: 0.3 }}
                    variants={{
                         visible: { opacity: 1 },
                         hidden: { opacity: 0}
                    }}
                    className='relative col-span-1 aspect-square rounded-lg border-2 border-slate-300/10 hover:border-violet-600/40 overflow-hidden group'>
                    <img src={Image2} alt="image preview of a quiz app made with react" className='w-full h-full object-contain' />
                    <div className='absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center px-8 bg-black/60 backdrop-blur-lg opacity-0 group-hover:opacity-100 transition duration-300'>
                         <h3 className='text-2xl font-semibold text-violet-600'>Article Summarizer</h3>
                         <p className='text-lg my-6 font-thin'>
                              This is an ai summarizer i built with react and an api i found on rapid api.
                              It basically summarize lengthy articles into clear and concise summaries, all
                              you have to do is paste the link of the article.
                         </p>
                         <a aria-label="Link to Raheem's ai summarizer" href="https://redoxx-ai-summarizer.vercel.app/" className='flex items-center gap-2 text-lg font-medium hover:underline underline-offset-4'>
                              <Radio className='stroke-red-600'/>
                              Go Live
                         </a>
                    </div>
               </motion.div>
               <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5, delay: 0.3 }}
                    variants={{
                         visible: { opacity: 1 },
                         hidden: { opacity: 0}
                    }}
                    className='relative col-span-1 aspect-square rounded-lg border-2 border-slate-300/10 hover:border-violet-600/40 overflow-hidden group'>
                    <img src={Image3} alt="image preview of a quiz app made with react" className='w-full h-full object-contain' />
                    <div className='absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center px-8 bg-black/60 backdrop-blur-lg opacity-0 group-hover:opacity-100 transition duration-300'>
                         <h3 className='text-2xl font-semibold text-violet-600'>E-commerce Site</h3>
                         <p className='text-lg my-6 font-thin'>
                              This is also a react project which i built just for fun, i used a headless cms called sanity 
                              to handle the contents of the site and i also integrated payment gateway with stripe.
                         </p>
                         <a aria-label="Link to redoxx-store" href="https://redoxx-store-xgtl.vercel.app/" className='flex items-center gap-2 text-lg font-medium hover:underline underline-offset-4'>
                              <Radio className='stroke-red-600'/>
                              Go Live
                         </a>
                    </div>
               </motion.div>
               <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5, delay: 0.3 }}
                    variants={{
                         visible: { opacity: 1 },
                         hidden: { opacity: 0}
                    }}
                    className='relative col-span-1 aspect-square rounded-lg border-2 border-slate-300/10 hover:border-violet-600/40 overflow-hidden group'>
                    <img src={Image4} alt="image preview of a quiz app made with react" className='w-full h-full object-contain' />
                    <div className='absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center px-8 bg-black/60 backdrop-blur-lg opacity-0 group-hover:opacity-100 transition duration-300'>
                         <h3 className='text-2xl font-semibold text-violet-600'>Simple Calculator</h3>
                         <p className='text-lg my-6 font-thin'>
                              This calculator was built with plain old HTML, CSS and Javascript, 
                              it has 3 theme mode which a user can switch between and it does 
                              basic arithmetic like every other normal calculator.
                         </p>
                         <a aria-label="Link to Raheem's calculator app" href="https://r4heem-orekoya.github.io/Calcultor-FEM/" className='flex items-center gap-2 text-lg font-medium hover:underline underline-offset-4'>
                              <Radio className='stroke-red-600'/>
                              Go Live
                         </a>
                    </div>
               </motion.div>
          </div>
     </section>
  )
}

export default Projects
