import React from 'react'
import Navbar from './Components/Navbar'
import Navbar2 from './Components/Navbar2'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import { Route, Routes } from 'react-router-dom'
import Notfound from './Pages/Notfound'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Kids from './Pages/Kids'
import Courses from './Pages/Courses'
import CourseDetail from './Pages/CourseDetail'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Navbar2 />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:courseId' element={<CourseDetail />} />

        <Route path='/product' element={<Product />}>
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
          <Route path='kids' element={<Kids />} />
        </Route>

        <Route path='*' element={<Notfound />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
