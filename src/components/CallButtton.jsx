import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const CallButton = () => {
  const phoneNumber = "+919873227756"; // Include country code

  return (
    <a
      href={`tel:${phoneNumber}`}
      className="group fixed bottom-24 right-6 z-50 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-xl transition-all duration-300"
    >
      <FaPhoneAlt className="text-2xl" />

    </a>
  );
};

export default CallButton;
