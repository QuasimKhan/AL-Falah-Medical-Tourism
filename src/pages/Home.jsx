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
import Button from "../components/Button";

const Home = () => {
  const topThreeInterpreters = InterpretersData.slice(0, 3); // ✅ Only first 3

  return (
    <>
    <Helmet>
  <title>AL-Falah Medical Tourism | Your Global Partner in Medical Tourism</title>

  <!-- English Meta Description -->
  <meta
    name="description"
    content="AL-Falah Medical Tourism connects patients from Iraq, Saudi Arabia, UAE, and Egypt to India’s best doctors, hospitals, and affordable treatment plans."
  />

  <!-- Arabic Meta Description -->
  <meta
    name="description"
    lang="ar"
    content="الفلاح للسياحة الطبية يربط المرضى من العراق والسعودية والإمارات ومصر بأفضل الأطباء والمستشفيات في الهند بأسعار مناسبة."
  />

  <!-- Keywords in English + Arabic -->
  <meta
    name="keywords"
    content="Medical Tourism India, India Hospitals, India Healthcare, Affordable Treatment India, Best Doctors India, Surgery in India, Visa Assistance India, علاج في الهند, سياحة طبية الهند, مستشفيات الهند, Healthcare Iraq to India, Healthcare Saudi to India, Healthcare UAE to India, Healthcare Egypt to India, Medical Visa India"
  />

  <meta name="author" content="AL-Falah Medical Tourism" />
  <link rel="canonical" href="https://www.alfalahmedicaltourism.in/" />

  <!-- Open Graph -->
  <meta property="og:title" content="AL-Falah Medical Tourism" />
  <meta
    property="og:description"
    content="Affordable, world-class medical care in India for patients from Iraq, Saudi Arabia, UAE, and Egypt."
  />
  <meta property="og:url" content="https://www.alfalahmedicaltourism.in/" />
  <meta property="og:type" content="website" />

  <!-- Twitter -->
  <meta name="twitter:title" content="AL-Falah Medical Tourism" />
  <meta
    name="twitter:description"
    content="Trusted medical tourism services in India — connecting patients from Iraq, Saudi Arabia, UAE, and Egypt to the best hospitals."
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 bg-gradient-to-br from-cyan-100 to-cyan-100 z-0 py-5">
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
          >
            <Button>
            View All Interpreters →
            </Button>
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
