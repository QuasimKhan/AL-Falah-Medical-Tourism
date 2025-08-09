import React from "react";
import { FaEnvelope } from "react-icons/fa";

const EmailButton = () => {
  const email = "alfalahmedicaltourism@gmail.com";
  const subject = "Inquiry about Medical Tourism Services";
  const body = "Assalamu Alaikum, I would like to know more about your services.";

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <a
      href={mailtoLink}
      className="group fixed bottom-6 left-6 z-50 bg-red-500 hover:bg-red-600 text-white p-4 rounded-full shadow-xl transition-all duration-300"
    >
      <FaEnvelope className="text-2xl" />

    </a>
  );
};

export default EmailButton;
