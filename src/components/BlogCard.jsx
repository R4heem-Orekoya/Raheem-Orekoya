import React from 'react'
import { urlFor } from '../lib/client'
import { Link } from 'react-router-dom'

const BlogCard = ({ blog }) => {
  return (
     <div className='col-span-1  bg-[#0F1117] border-2 border-slate-500/10 rounded-xl overflow-hidden'>
          <img src={urlFor(blog?.image)} alt={blog?.title} className='w-full aspect-video object-cover'/>
          <div className='p-6'>
               <Link to={`/blogs/${blog?.slug}`} className='text-xl sm:text-2xl font-semibold'>{blog.title}</Link>
               <p className='text-lg text-slate-400 my-4'>{blog.excerpt}</p>
               <Link to={`/blogs/${blog?.slug}`} className='text-lg text-violet-500'>Read more</Link>
          </div>
     </div>
  )
}
// bg-[#0F1112]

export default BlogCard
