import React from "react";
import { DoctorsData } from "../data/doctorData";
import DoctorCard from "../components/cards/DoctorCard";
import { FaUserMd } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

export default function Doctors() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-10">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Specialist Doctors | AL-Falah Medical Tourism</title>
        <meta
          name="description"
          content="Meet specialist doctors partnered with AL-Falah Medical Tourism for world-class personalized medical care and treatment."
        />
        <meta name="keywords" content="Doctors, Specialist Doctors, Medical Tourism, AL-Falah Medical Tourism, Healthcare Experts" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://alfalahmedicaltourism.in/doctors" /> 
      </Helmet>

      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <FaUserMd className="text-5xl text-cyan-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800">
          Meet Our <div className="text-cyan-900">Specialist Doctors</div>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mt-3 p-3">
          <span className="font-semibold text-cyan-900">AL-Falah Medical Tourism</span> partners with leading healthcare experts to ensure you receive world-class treatment and personalized care.
        </p>
      </div>

      {/* Doctors Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {DoctorsData.map((doctor) => (
            <div
              key={doctor.id}
              
            >
              <DoctorCard {...doctor} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
