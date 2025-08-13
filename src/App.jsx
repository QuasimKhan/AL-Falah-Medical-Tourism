import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import ScrollToTop from './utils/ScrollToTop';
import WhatsappButton from './components/WhatsappButton';
import CallButton from './components/CallButtton';
import EmailButton from './components/EmailButton';
import Footer from './components/Footer';
import SkeletonLoader from './components/SkeletonLoader'; // ✅

const Home = lazy(() => import('./pages/Home'));
// Remove lazy loading from other pages
import TreatmentPage from './pages/Treatments';
import AboutTreatment from './pages/AboutTreatment';
import ServicePage from './pages/Services';
import AboutPage from './pages/About';
import Interpreters from './pages/Interpreters';
import Doctors from './pages/Doctors';
import ContactPage from './pages/Contact';
import BookAppointment from './pages/BookAppointment';
import AboutDoctor from './pages/AboutDoctor';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <>
      <Navbar />
      <div className="mt-20">
        <ScrollToTop />

        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<SkeletonLoader />}>
                <Home />
              </Suspense>
            }
          />
          <Route path="/treatments" element={<TreatmentPage />} />
          <Route path="/treatment/:treatmentName" element={<AboutTreatment />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/interpreters" element={<Interpreters />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/appointment" element={<BookAppointment />} />
          <Route path="/doctors/:doctorName" element={<AboutDoctor />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>

      <EmailButton />
      <CallButton />
      <WhatsappButton />
      <Footer />
    </>
  );
}

export default App;
