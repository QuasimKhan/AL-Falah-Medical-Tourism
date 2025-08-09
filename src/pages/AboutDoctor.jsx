import React from "react";
import { useParams, Link } from "react-router-dom";
import { DoctorsData } from "../data/doctorData";
import NotFound from "../components/NotFound";
import Button from "../components/Button";
import { FaUserMd, FaHospital, FaMapMarkerAlt, FaLanguage, FaGraduationCap, FaBriefcaseMedical, FaRegClock } from "react-icons/fa";

const AboutDoctor = () => {
  const { doctorName } = useParams();

  const doctor = DoctorsData.find((doc) => {
    return doc.name.trim().toLowerCase().replace(/\s+/g, "-") === doctorName;
  });

  if (!doctor) {
    return (
      <div className="text-center text-red-600 mt-10">
        <NotFound name={doctorName} />
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen py-10 px-4 flex flex-col md:flex-row items-center justify-center">
      {/* Left: Doctor Image */}
      <div className="bg-white shadow-xl rounded-3xl overflow-hidden w-1/2 md:w-1/3 p-4">
        <img
          src={doctor.img || "/images/doctors/doctor-dummy.png"}
          alt={doctor.name}
          className="rounded-2xl w-full object-cover"
        />
      </div>

      {/* Right: Doctor Info */}
      <div className="w-full md:w-2/3 mt-6 md:mt-0 md:ml-10">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          <FaUserMd className="text-blue-500" /> {doctor.name}
        </h1>

        <p className="mt-2 text-lg text-gray-600 flex items-center gap-2">
          <FaBriefcaseMedical className="text-blue-400" />
          {doctor.specialization}
        </p>

        <div className="mt-2 text-gray-700 space-y-2 text-sm">
          <p className="flex items-center gap-2">
            <FaGraduationCap className="text-green-500" />
            <span className="font-medium">Qualifications:</span> {doctor.qualifications}
          </p>
          <p className="flex items-center gap-2">
            <FaHospital className="text-purple-500" />
            <span className="font-medium">Hospital:</span> {doctor.hospital}
          </p>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-500" />
            <span className="font-medium">Location:</span> {doctor.location}
          </p>
          <p className="flex items-center gap-2">
            <FaRegClock className="text-orange-500" />
            <span className="font-medium">Experience:</span> {doctor.experience}
          </p>
          <p className="flex items-center gap-2">
            <FaLanguage className="text-indigo-500" />
            <span className="font-medium">Languages:</span> {doctor.languagesSpoken.join(", ")}
          </p>
        </div>

        <div className="mt-6 text-sm leading-relaxed text-gray-800 whitespace-pre-line">
          {doctor.about.trim()}
        </div>

        <div className="mt-8">
          <Link to={"/appointment"}>
          <Button>
            Book Appointment
          </Button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutDoctor;
