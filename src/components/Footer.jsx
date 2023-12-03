import React from 'react'
import { Instagram, Twitter, Github } from 'lucide-react'
import FadeInAnimation from './FadeInAnimation'

const Footer = () => {
  return (
     <footer className='py-8 border-t-2 border-slate-400/10 text-center'>
          <FadeInAnimation>
               <h2 className='text-3xl font-semibold tracking-wider text-slate-300'>Rah<span className='text-violet-600'>ee</span>m<span className='text-violet-600'>.</span></h2>
               <ul className='mx-auto flex gap-6 items-center justify-center mt-8'>
                    <li>
                         <a href="https://www.instagram.com/redoxx.code/"><Instagram size={30} className='stroke-slate-400 hover:stroke-violet-600'/></a>
                    </li>
                    <li>
                         <a href="https://twitter.com/Redoxx_Code"><Twitter size={30} className='stroke-slate-400 hover:stroke-violet-600'/></a>
                    </li>
                    <li>
                         <a href="https://github.com/R4heem-Orekoya"><Github size={30} className='stroke-slate-400 hover:stroke-violet-600'/></a>
                    </li>
               </ul>
          </FadeInAnimation>
     </footer>
  )
}

export default Footer
