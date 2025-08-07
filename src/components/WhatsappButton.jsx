import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  const phoneNumber = "919794094606";
  const defaultMessage =
    "Assalamu Alaikum, I’m interested in treatment options provided by Al-Falah Medical Tourism. Please share more details.";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition-all duration-300 animate-pulse"
    >
      <FaWhatsapp className="text-2xl" />

      {/* Tooltip on hover */}
      <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-800 text-white text-sm px-3 py-1 rounded-md -top-12 right-0 whitespace-nowrap shadow-md">
        Chat with us on WhatsApp
      </span>
    </a>
  );
};

export default WhatsappButton;
