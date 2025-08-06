import { useState } from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import PageNotFound from './components/PageNotFound'
import Interpreters from './pages/Interpreters'
import ScrollToTop from './utils/ScrollToTop'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <div className='mt-20'>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div>About Us</div>} />
          <Route path="/interpreters" element={<Interpreters />} />
          <Route path="/doctors" element={<div>Doctors</div>} />
          <Route path="/hospitals" element={<div>Hospitals</div>} />
          <Route path="/contact" element={<div>Contact Us</div>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
