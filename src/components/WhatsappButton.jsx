import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  const phoneNumber = "919873227756";
  const defaultMessage =
    "Assalamu Alaikum, I’m interested in treatment options provided by Al-Falah Medical Tourism. Please share more details.";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition-all duration-300"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
};

export default WhatsappButton;
