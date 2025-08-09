import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaComments, FaCheckCircle } from "react-icons/fa";
import Button from "../components/Button";

const BookAppointment = () => {
  const [status, setStatus] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    formData.append("access_key", "bde16910-98d2-4cb2-9da1-11dfde2a0f6d");
    formData.append("subject", "New Appointment Request - Al-Falah Medical Tourism");
    formData.append("from_name", "Al-Falah Medical Tourism Website");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      setStatus("✅ Appointment request sent successfully!");
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 5000); // Hide after 5 seconds
      e.target.reset();
    } else {
      setStatus(`❌ Failed to send: ${res.message || "Please try again."}`);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <FaCheckCircle className="text-green-500 text-6xl mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Thank You!
          </h2>
          <p className="text-gray-600">
            Your appointment request has been received.  
            We will contact you shortly to confirm the details.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Book an Appointment
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex items-center border border-gray-300 rounded-lg p-3">
            <FaUser className="text-gray-500 mr-3" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="flex-1 outline-none"
            />
          </div>
          <div className="flex items-center border border-gray-300 rounded-lg p-3">
            <FaEnvelope className="text-gray-500 mr-3" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="flex-1 outline-none"
            />
          </div>
          <div className="flex items-center border border-gray-300 rounded-lg p-3">
            <FaPhone className="text-gray-500 mr-3" />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              required
              className="flex-1 outline-none"
            />
          </div>
          <div className="flex items-start border border-gray-300 rounded-lg p-3">
            <FaComments className="text-gray-500 mr-3 mt-1" />
            <textarea
              name="message"
              placeholder="Hello, I would like to book an appointment for medical consultation with Al-Falah Medical Tourism. Please share the available dates and details."
              required
              rows="5"
              className="flex-1 outline-none resize-none"
            ></textarea>
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Submit Appointment Request
          </Button>
        </form>
        {status && <p className="mt-4 text-center">{status}</p>}
      </div>
    </div>
  );
};

export default BookAppointment;
