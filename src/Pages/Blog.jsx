import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import BlogContext from '../context/blogContext'
import { urlFor } from '../lib/client'
import { PortableText } from '@portabletext/react'
import CodeBlock from '../components/CodeBlock'
import { Loader2 } from 'lucide-react'


const Blog = () => {
  const { id } = useParams()
  const { blogs } = useContext(BlogContext)
  const blog = blogs.find(blog => blog.slug === id)

  if (!blog) {
    return(
    <>
      <div className='w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center'>
        <Loader2 size={60} className='animate-spin stroke-slate-500'/>
        <p className='mt-4 text-xl md:text-2xl text-slate-600'>Loading...</p>
      </div>
    </>
    )
  }

  return (
    <div className='w-[min(1000px,100%)] mx-auto py-16'>
      <h2 className='text-xl sm:text-2xl md:text-3xl font-bold'>{blog?.title}: {blog.excerpt}</h2>
      <img src={urlFor(blog?.image)} alt={blog?.title} className='w-full my-16 aspect-video rounded-xl object-cover'/>
      <div className='block-text sm:text-lg text-slate-300'>
        <PortableText
          value={blog?.blog}
          components={{
            code: ({ children }) => <CodeBlock code={children} />
          }}
        />
      </div>
    </div>
  )
}


export default Blog
