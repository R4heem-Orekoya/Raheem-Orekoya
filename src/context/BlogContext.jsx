import React, { useEffect, useState, createContext } from 'react'
import BlogCard from '../components/BlogCard'
import sanityClient from '../lib/client'

const BlogContext = createContext();

export const BlogContextProvider = ({ children }) => {
     const [blogs, setBlogs ] = useState([])
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);

     useEffect(() => {
          const fetchSanity = async () => {
               try{
                    const blogData = await sanityClient.fetch(`*[_type == 'Blogs']`)
                    setBlogs(blogData)
                    setLoading(false);
               }catch(error){
                    setError('Error fetching data');
                    setLoading(false);
               }
          }
          fetchSanity()
     }, [])

     return(
          <BlogContext.Provider 
               value={{
                    blogs, loading, error
               }}>
               {children}
          </BlogContext.Provider>
     )
}

export default BlogContext