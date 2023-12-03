import React from 'react'
import { Instagram, Twitter, Github } from 'lucide-react'

const Socials = () => {
  return (
     <ul className='absolute left-0 bottom-[5%] flex flex-col max-md:flex-row max-md:left-[50%] max-md:translate-x-[-50%] max-sm:hidden items-center gap-4 after:w-[3px] after:h-12 after:rounded-full after:bg-violet-600 max-md:after:hidden'>
          <li>
            <a href="https://www.instagram.com/redoxx.code/"><Instagram size={26} strokeWidth={2} className='stroke-slate-400 hover:stroke-violet-600 transition duration-300'/></a>
          </li>
          <li>
            <a href="https://twitter.com/Redoxx_Code"><Twitter size={26} strokeWidth={2} className='stroke-slate-400 hover:stroke-violet-600 transition duration-300'/></a>
          </li>
          <li>
            <a href="https://github.com/R4heem-Orekoya"><Github size={26} strokeWidth={2} className='stroke-slate-400 hover:stroke-violet-600 transition duration-300'/></a>
          </li>
     </ul>
  )
}

export default Socials
