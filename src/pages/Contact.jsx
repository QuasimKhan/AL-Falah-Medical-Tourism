import React from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* Header */}
      <div className="text-center py-12 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Contact Us
        </h1>
        <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
          We’re here to assist you with any inquiries about treatments,
          appointments, or travel arrangements. Reach out to{" "}
          <span className="font-semibold text-cyan-900">
            AL-Falah Medical Tourism
          </span>{" "}
          anytime.
        </p>
      </div>

      {/* Contact Details */}
      <section className="max-w-6xl mx-auto px-4 md:px-10 grid gap-8 md:grid-cols-3">
        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition">
          <FaPhoneAlt className="text-4xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
          <p className="text-gray-600 mt-2">+919873227756</p>
          <a
            href="tel:+919873227756"
            className="text-blue-600 hover:underline block mt-1"
          >
            Call Now
          </a>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition">
          <FaPhoneAlt className="text-4xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
          <p className="text-gray-600 mt-2">+917880987272</p>
          <a
            href="tel:+917880987272"
            className="text-blue-600 hover:underline block mt-1"
          >
            Call Now
          </a>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition">
          <FaEnvelope className="text-4xl text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Email</h3>
          <p className="text-gray-600 mt-2">alfalahmedicaltourism@gmail.com</p>
          <a
            href="mailto:alfalahmedicaltourism@gmail.com"
            className="text-green-600 hover:underline block mt-1"
          >
            Send Email
          </a>
        </div>

        
      </section>

      {/* Social Media Links */}
      <section className="text-center py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Connect With Us
        </h2>
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://wa.me/919873227756"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-600 text-3xl"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://facebook.com/alfalahmedicaltourism"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 text-3xl"
          >
            <FaFacebook />
          </a>
          
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
