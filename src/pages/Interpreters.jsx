import React from 'react';
import { InterpretersData } from '../data/InterpretersData';
import UserCard from '../components/cards/interpreterCard';
import { FaUserMd } from 'react-icons/fa'; // 👨‍⚕️ Icon for doctors/interpreters

const Interpreters = () => {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-100 -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Title with icon */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center gap-2 text-4xl font-bold text-teal-700">
            <FaUserMd className="text-teal-500" />
            Our Interpreters
          </div>
          <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our expert interpreters who are fluent in multiple languages and dedicated to making your healthcare journey seamless.
          </p>
        </div>

        {/* Interpreter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {InterpretersData.map((interpreter) => (
            <div
              key={interpreter.id}
              className="transform transition-transform duration-300 hover:scale-105"
            >
              <UserCard {...interpreter} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interpreters;
