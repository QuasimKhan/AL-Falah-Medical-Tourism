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
const TreatmentPage = lazy(() => import('./pages/Treatments'));
const AboutTreatment = lazy(() => import('./pages/AboutTreatment'));
const ServicePage = lazy(() => import('./pages/Services'));
const AboutPage = lazy(() => import('./pages/About'));
const Interpreters = lazy(() => import('./pages/Interpreters'));
const Doctors = lazy(() => import('./pages/Doctors'));
const ContactPage = lazy(() => import('./pages/Contact'));
const BookAppointment = lazy(() => import('./pages/BookAppointment'));
const AboutDoctor = lazy(() => import('./pages/AboutDoctor'));
const PageNotFound = lazy(() => import('./components/PageNotFound'));

function App() {
  return (
    <>
      <Navbar />
      <div className="mt-20">
        <ScrollToTop />

        {/* Use Skeleton Loader as fallback */}
        <Suspense fallback={<SkeletonLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
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
        </Suspense>
      </div>

      <EmailButton />
      <CallButton />
      <WhatsappButton />
      <Footer />
    </>
  );
}

export default App;
