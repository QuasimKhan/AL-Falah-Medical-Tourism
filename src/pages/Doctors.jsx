import React from 'react';
import DoctorCard from '../components/cards/DoctorCard';
import { DoctorsData } from '../data/doctorData';

const Doctors = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {DoctorsData.map((doctor) => (
        <DoctorCard key={doctor.id} {...doctor} />
      ))}
    </div>
  );
};

export default Doctors;


