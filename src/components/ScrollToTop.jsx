import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
     const { pathname } = useLocation();
     const url = pathname

     useEffect(() => {
          window.scrollTo(0, 0)
     }, [url])

     
  return null
}

export default ScrollToTop
