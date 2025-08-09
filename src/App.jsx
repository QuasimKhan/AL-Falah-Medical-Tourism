import { useState } from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import PageNotFound from './components/PageNotFound'
import Interpreters from './pages/Interpreters'
import ScrollToTop from './utils/ScrollToTop'
import Footer from './components/Footer'
import Doctors from './pages/Doctors'
import AboutDoctor from './pages/AboutDoctor'
import TreatmentPage from './pages/Treatments'
import AboutTreatment from './pages/AboutTreatment'
import ServicePage from './pages/Services'
import WhatsappButton from './components/WhatsappButton'
import CallButton from './components/CallButtton'
import EmailButton from './components/EmailButton'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import BookAppointment from './pages/BookAppointment'

function App() {
  return (
    <>
      <Navbar />
      <div className='mt-20'>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/treatments" element={<TreatmentPage />} />
          <Route path="/treatment/:treatmentName" element={<AboutTreatment />} />
          <Route path="/services" element={<ServicePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/interpreters" element={<Interpreters />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/appointment" element={<BookAppointment />} />

          <Route path='/doctors/:doctorName' element={<AboutDoctor />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <EmailButton />
      <CallButton />
      <WhatsappButton />
      <Footer />
    </>
  )
}

export default App
