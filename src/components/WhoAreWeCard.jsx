import React from 'react';
import { useNavigate } from 'react-router-dom'; // If using React Router
import Button from './Button';

const WhoAreWeCard = () => {
  const navigate = useNavigate(); // For navigation

  return (
    <div className="relative bg-white shadow-2xl rounded-2xl p-8 max-w-4xl mx-auto mt-10 flex flex-col md:flex-row items-center gap-6 animate-fade-in">
      
      {/* Graphic Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/images/logo.png"
          alt="Medical Support"
          className="max-w-xs w-full object-contain"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
          Who Are We?
        </h2>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          <strong className="text-yellow-600">Al-Falah Medical Tourism</strong> <br />
          <span className="block mt-2 text-yellow-700 font-medium">
            Your Global Partner in Medical Tourism
          </span>
          <br /><br />
          Al-Falah Medical Tourism offers comprehensive healthcare travel solutions for patients from around the world, connecting them to India’s top hospitals and renowned specialists.
          <br /><br />
          We provide translation and assistance services in <strong>Arabic, English, Russian, Spanish, French,</strong> and <strong>Persian</strong> — with dedicated Arabic support for patients from Arab countries.
        </p>

        <Button
          onClick={() => navigate('/about')}
          variant="primary"
          size="md"
          className="mt-6 inline-flex items-center gap-2"
        >
          Know More
        </Button>
      </div>
    </div>
  );
};

export default WhoAreWeCard;
