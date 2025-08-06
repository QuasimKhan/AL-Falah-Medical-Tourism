import React from 'react';
import Crousels from '../components/Crousels';
import WhoAreWeCard from '../components/cards/WhoAreWeCard';
import FacebookEmbed from '../components/FacebookPageEmbeded';
import UserCard from '../components/cards/interpreterCard';
import { InterpretersData } from '../data/InterpretersData';
import { Link } from 'react-router-dom';

const Home = () => {
  const topThreeInterpreters = InterpretersData.slice(0, 3); // ✅ Only first 3

  return (
    <>
      <Crousels />
      <WhoAreWeCard />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Our Interpreters</h2>
        
        {/* Show 3 interpreters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {topThreeInterpreters.map((interpreter) => (
            <UserCard key={interpreter.id} {...interpreter} />
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-6">
          <Link
            to="/interpreters"
            className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            View All Interpreters →
          </Link>
        </div>
      </div>

      <FacebookEmbed pageUrl="https://www.facebook.com/alfalahmedicaltourism" />
    </>
  );
};

export default Home;
