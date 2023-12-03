import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import BlogPage from './Pages/BlogPage'
import ResourcePage from './Pages/ResourcePage'
import Blog from './Pages/Blog'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={
            <>
              <Hero />
              <About />
              <Projects />
              <Contact />
            </>
          }/>
          <Route path='/blogs' element={<BlogPage />}/>
          <Route path='/resources' element={<ResourcePage />}/>
          <Route path='/blogs/:id' element={<Blog />}/>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App

