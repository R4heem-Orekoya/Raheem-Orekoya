import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
     const [isNavOpen, setIsNavOpen] = useState(false)
  return (
    <header className='sticky top-0 z-50 w-screen bg-black/50 backdrop-blur-md border-b-2 border-slate-400/10'>
      <nav className='w-[min(1400px,90%)] h-20 mx-auto flex justify-between items-center'>
          <Link to='/'>
               <span className='text-xl font-semibold px-4 py-[6px] rounded-md bg-violet-600'>R</span>
          </Link>

          <ul className={`flex items-center gap-8 max-sm:fixed ${isNavOpen ? 'max-sm:left-0' : 'max-sm:left-[-100%]'} duration-500 max-sm:top-20 max-sm:flex-col max-sm:gap-4 max-sm:items-start max-sm:p-[5%] max-sm:bg-black max-sm:w-full max-sm:border-b max-sm:border-t max-sm:border-white/5`}>
               <li className='text-lg font-medium hover:text-violet-600 transitio duration-300'>
                    <Link to='/'>Portfolio</Link>
               </li>
               <li className='text-lg font-medium hover:text-violet-600 transitio duration-300'>
                    <Link to='/blogs'>Blog</Link>
               </li>
               <li className='text-lg font-medium hover:text-violet-600 transitio duration-300'>
                    <Link to='/resources'>Resources</Link>
               </li>
          </ul>

          <div onClick={() => setIsNavOpen(!isNavOpen)} className='relative grid place-items-center gap-2 w-[25px] aspect-square cursor-pointer sm:hidden'>
               <div className={`absolute w-full h-[2px] rounded-full bg-white ${isNavOpen ? 'opacity-0' : 'opacity-100'} duration-300`}></div>
               <div className={`absolute w-full h-[2px] rounded-full bg-white ${isNavOpen ? '-translate-y-0 rotate-45' : '-translate-y-2'} duration-300`}></div>
               <div className={`absolute w-full h-[2px] rounded-full bg-white ${isNavOpen ? '-translate-y-0 rotate-[315deg]' : 'translate-y-2'} duration-300`}></div>
          </div>
      </nav>
    </header>
  )
}

export default Navbar
