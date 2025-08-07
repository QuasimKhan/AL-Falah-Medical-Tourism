import React from "react";
import {
  FaLanguage,
  FaStethoscope,
  FaHeadset,
  FaLock,
  FaUserFriends,
  FaWallet,
  FaThumbsUp,
  FaHospitalAlt,
  FaShieldAlt,
  FaCommentAlt,
  FaUserMd,
  FaLightbulb,
  FaHandsHelping,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import Button from "../Button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <FaLanguage />,
    text: "Expert interpreters fluent in multiple languages",
  },
  { icon: <FaStethoscope />, text: "Comprehensive medical services" },
  { icon: <FaHeadset />, text: "24/7 customer support" },
  { icon: <FaLock />, text: "Secure and reliable booking platform" },
  { icon: <FaUserFriends />, text: "Personalized care and attention" },
  { icon: <FaWallet />, text: "Affordable packages tailored to your needs" },
  { icon: <FaThumbsUp />, text: "Trusted by thousands of satisfied patients" },
  {
    icon: <FaHospitalAlt />,
    text: "Partnerships with top hospitals and clinics",
  },
  { icon: <FaShieldAlt />, text: "Commitment to quality and safety" },
  {
    icon: <FaCommentAlt />,
    text: "Positive reviews and testimonials from our clients",
  },
  {
    icon: <FaUserMd />,
    text: "Experienced team with a passion for healthcare",
  },
  {
    icon: <FaLightbulb />,
    text: "Continuous improvement and innovation in services",
  },
  { icon: <FaHandsHelping />, text: "Community involvement and support" },
  {
    icon: <FaMoneyCheckAlt />,
    text: "Transparent pricing with no hidden fees",
  },
];

const HeroWhyChooseUs = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
      {/* Decorative SVG background (optional) */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 to-orange-100 opacity-50 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="lg:w-2/3 text-gray-800">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-cyan-900 text-center lg:text-left leading-tight">
            Why Choose Us?
          </h2>
          <p className="text-lg mb-8 text-orange-800 text-center lg:text-left">
            We are committed to providing the best medical tourism experience
            with our expert interpreters and comprehensive services.
          </p>

          <ul className="space-y-4">
            {services.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-base sm:text-lg"
              >
                <span className="text-cyan-700 text-xl mt-1">{item.icon}</span>
                <span className="text-gray-800">{item.text}</span>
              </li>
            ))}
          </ul>
            <div className="flex flex-col items-center lg:items-start gap-4 mt-8">

          <p className="mt-8 text-lg font-medium text-center lg:text-left text-cyan-900">
            Join us in your journey to better health and well-being.
          </p>
          <Link
            to={"/appointment"}
            className=" md:flex items-center gap-3 "
          >
            <Button>Book Appointment</Button>
          </Link>
            </div>
        </div>

        {/* Doctor Image */}
        <div className="hidden lg:block lg:w-1/3">
          <img
            src="/images/heros/doctor-portrait.png"
            alt="Doctor"
            className="w-full h-auto rounded-2xl shadow-xl border border-white"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroWhyChooseUs;
