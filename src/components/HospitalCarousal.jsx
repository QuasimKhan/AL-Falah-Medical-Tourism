// components/HospitalLogoCarousel.jsx
import React from "react";
import { HospitalData } from "../data/hospitalData";

export default function HospitalLogoCarousel() {
  return (
    <div className="overflow-hidden w-full py-6">
      <div
        className="flex gap-10 animate-scroll"
        style={{ minWidth: "fit-content" }}
      >
        {[...HospitalData, ...HospitalData].map((hospital, index) => (
          <div key={index} className="flex-shrink-0 w-40 h-20 flex items-center justify-center">
            <img
              src={hospital.image}
              alt={hospital.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 100s linear infinite;
        }
      `}</style>
    </div>
  );
}
