import React, { useContext } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import BlogCard from '../components/BlogCard'
import BlogContext from '../context/BlogContext'

const BlogPage = () => {
  const { blogs, loading, error } = useContext(BlogContext)

  if (loading) {
    return <div className='min-h-[calc(100vh-80px)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-16 '>
        <div className='p-0 '>
          <SkeletonTheme baseColor="#1a1d24" highlightColor="#2C2F38">
            <div>
              <Skeleton className='aspect-video rounded-b-none rounded-t-lg'/>
            </div>
            <div className='p-4 bg-[#0F1117] rounded-b-lg'>
              <h2><Skeleton className='h-10'/></h2>
              <p><Skeleton className='h-6 w-[60%] mt-4'/></p>
              <p><Skeleton className='h-6 w-[40%] mt-4'/></p>
            </div>
          </SkeletonTheme>
        </div>
        <div className='p-0 overflow-hidden'>
          <SkeletonTheme baseColor="#1a1d24" highlightColor="#2C2F38">
            <div>
              <Skeleton className='aspect-video rounded-b-none rounded-t-lg'/>
            </div>
            <div className='p-4 bg-[#0F1117] rounded-b-lg'>
              <h2><Skeleton className='h-10'/></h2>
              <p><Skeleton className='h-6 w-[60%] mt-4'/></p>
              <p><Skeleton className='h-6 w-[40%] mt-4'/></p>
            </div>
          </SkeletonTheme>
        </div>
        <div className='p-0 overflow-hidden'>
          <SkeletonTheme baseColor="#1a1d24" highlightColor="#2C2F38">
            <div>
              <Skeleton className='aspect-video rounded-b-none rounded-t-lg'/>
            </div>
            <div className='p-4 bg-[#0F1117] rounded-b-lg'>
              <h2><Skeleton className='h-10'/></h2>
              <p><Skeleton className='h-6 w-[60%] mt-4'/></p>
              <p><Skeleton className='h-6 w-[40%] mt-4'/></p>
            </div>
          </SkeletonTheme>
        </div>
    </div>
  }

  if(error){
    return (
      <div className='h-[calc(100vh-80px)] py-16'>
        <p className='text-xl md:text-2xl text-red-400 text-center'>{error}! 😒</p>
      </div>
    )
  }

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16'>
      {blogs.map((blog, index) => (
        <BlogCard blog={blog} key={index}/>
      ))}
    </section>
  )
}

export default BlogPage
