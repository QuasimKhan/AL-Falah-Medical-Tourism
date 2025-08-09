import React from "react";
import Crousels from "../components/Crousels";
import WhoAreWeCard from "../components/cards/WhoAreWeCard";
import FacebookEmbed from "../components/FacebookPageEmbeded";
import UserCard from "../components/cards/interpreterCard";
import { InterpretersData } from "../data/InterpretersData";
import { Link } from "react-router-dom";
import HeroWhyChooseUs from "../components/heros/HeroWhyChooseUs"; // ✅ Importing the heroWhyChooseUs component
import WhatsappButton from "../components/WhatsappButton";
import { ServicesData } from "../data/servicesData";
import ServiceCard from "../components/cards/ServiceCard";
import ServicesCarousel from "../components/ServicesCarousel";
import HospitalLogoCarousel from "../components/HospitalCarousal";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const topThreeInterpreters = InterpretersData.slice(0, 3); // ✅ Only first 3

  return (
    <>
    <Helmet>
          <title>AL-Falah Medical Tourism | Your Global Partner in Medical Tourism.</title>
          <meta
            name="description"
            content="AL-Falah Medical Tourism offers world-class medical services in India. Access top doctors, hospitals, interpreters, and personalized care."
          />
          <meta name="keywords" content="Medical Tourism, Hospitals in India, Medical Services, Healthcare, AL-Falah" />
          <meta name="author" content="AL-Falah Medical Tourism" />
          <link rel="canonical" href="https://www.alfalahmedicaltourism.in/" />
          {/* Open Graph / Facebook */}
          <meta property="og:title" content="AL-Falah Medical Tourism" />
          <meta
            property="og:description"
            content="Get personalized and affordable healthcare with AL-Falah Medical Tourism. Your trusted partner in medical travel."
          />
          <meta property="og:url" content="https://www.alfalahmedicaltourism.in/" />
          <meta property="og:type" content="website" />
          {/* Twitter */}
          <meta name="twitter:title" content="AL-Falah Medical Tourism" />
          <meta
            name="twitter:description"
            content="Access top medical care in India with AL-Falah Medical Tourism. Trusted hospitals, interpreters, and excellent service."
          />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>



      <Crousels />
      <WhoAreWeCard />
      <HeroWhyChooseUs /> {/* ✅ Using the heroWhyChooseUs component */}
      {/* Our Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800 text-center">
          Our Services
        </h2>
        <p className="text-lg text-gray-600 text-center mb-8">
          At{" "}
          <span className="font-semibold text-cyan-900">
            AL-Falah Medical Tourism
          </span>
          , we offer a wide range of services to ensure your medical journey is
          smooth and stress-free.
        </p>

        <ServicesCarousel />
      </div>
     
      {/* Interpreters Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 bg-gradient-to-br from-cyan-100 to-orange-100 z-0 py-5">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800 text-center">
          Our Interpreters
        </h2>

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
       {/* Connected Hospitals Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <h2
          className="text-4xl sm:text-5xl font-bold mb
-6 text-gray-800 text-center"
        >
          Our Partner Hospitals
        </h2>
        <p className="text-lg text-gray-600 text-center mb-8">
          <span className="font-semibold text-cyan-900">
            AL-Falah Medical Tourism
          </span>{" "}
          collaborates with top hospitals across India to provide you with the
          best medical care.
        </p>
        <HospitalLogoCarousel />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800 text-center">
        Latest Updates
      </h2>
      <p className="text-lg text-gray-600 text-center mb-8">
        At{" "}
        <span className="font-semibold text-cyan-900">
          Facebook - AL-Falah Medical Tourism
        </span>
        , we share valuable insights, tips, and updates on medical tourism,
        healthcare trends, and patient experiences. Stay informed and empowered
        with our blog.
      </p>
      <FacebookEmbed pageUrl="https://www.facebook.com/alfalahmedicaltourism" />
      </div>
    </>
  );
};

export default Home;
