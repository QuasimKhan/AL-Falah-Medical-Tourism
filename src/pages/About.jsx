import React from "react";
import {
  FaHandshake,
  FaUserMd,
  FaGlobeAsia,
  FaHeart,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center py-12 px-4 md:py-16">
        <img
          src="/images/logo.png"
          alt="AL-Falah Medical Tourism Logo"
          className="w-40 h-auto md:w-60 lg:w-72 mb-6 drop-shadow-md"
        />
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          About AL-Falah Medical Tourism
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl">
          Your trusted partner in global healthcare, ensuring world-class
          treatments with compassion, transparency, and care.
        </p>
      </div>

      {/* Company Overview */}
      <section className="max-w-6xl mx-auto px-4 md:px-10 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Who We Are
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          <span className="font-semibold text-gray-900">
            AL-Falah Medical Tourism
          </span>{" "}
          is a premier medical tourism facilitator dedicated to helping
          patients from around the world access top-quality healthcare in
          India and other leading medical destinations. We work closely
          with world-class hospitals, renowned doctors, and specialized
          clinics to ensure every patient receives the best care possible —
          from consultation to recovery.
        </p>
        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
          With a focus on affordability, comfort, and personalized
          attention, we handle every detail of your medical journey,
          including visa assistance, travel arrangements, interpreter
          services, and post-treatment follow-up.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-10 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 flex items-center gap-2">
              <FaHeart className="text-red-500" /> Our Mission
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              To provide international patients with access to the highest
              standards of healthcare while offering compassionate support
              and seamless coordination at every step.
            </p>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 flex items-center gap-2">
              <FaGlobeAsia className="text-green-500" /> Our Vision
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              To become the most trusted name in medical tourism worldwide,
              recognized for ethical practices, patient satisfaction, and
              excellence in service.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-10">
            Why Choose AL-Falah Medical Tourism?
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
              <FaUserMd className="text-4xl text-blue-500 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-800">
                Top Doctors
              </h4>
              <p className="text-gray-600 mt-2">
                Access to leading specialists and internationally accredited
                hospitals.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
              <FaHandshake className="text-4xl text-green-500 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-800">
                Personalized Care
              </h4>
              <p className="text-gray-600 mt-2">
                We treat every patient like family, ensuring comfort and
                dignity.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
              <FaGlobeAsia className="text-4xl text-purple-500 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-800">
                Global Reach
              </h4>
              <p className="text-gray-600 mt-2">
                Serving patients from multiple countries with multilingual
                support.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
              <FaHeart className="text-4xl text-pink-500 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-800">
                Affordable Excellence
              </h4>
              <p className="text-gray-600 mt-2">
                High-quality treatments at a fraction of international costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Director  */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Meet Our Director
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <img
              src="/images/interpreters/sarfaraz.png"
              alt="Director of AL-Falah Medical Tourism"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg mb-4 md:mb-0"
            />
            <div className="max-w-2xl">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                Mr. Sarfaraz Ahmad
              </h3>
              <p className="mt-2 text-gray-600">
                With over 20 years of experience in healthcare management,
                Mr. Sarfaraz Ahmad leads AL-Falah Medical Tourism with a vision
                to bridge the gap between patients and world-class medical
                services. His dedication to patient care and ethical practices
                sets AL-Falah Medical Tourism apart.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="bg-white py-12 text-center border-t border-gray-200">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
          Ready to Begin Your Medical Journey?
        </h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto text-gray-600">
          Let AL-Falah Medical Tourism guide you to world-class healthcare
          with compassion and care.
        </p>
        <Link to="/contact">
        <Button>
            Contact Us Today
        </Button>
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
