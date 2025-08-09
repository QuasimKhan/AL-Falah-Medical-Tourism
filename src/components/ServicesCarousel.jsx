// components/ServicesCarousel.jsx
import React from "react";
import { ServicesData } from "../data/servicesData";
import ServiceCard from "./cards/ServiceCard";

export default function ServicesCarousel() {
  return (
    <div className="overflow-hidden w-full py-6 bg-gray-50">
      <div
        className="flex gap-6 animate-scroll"
        style={{ minWidth: "fit-content" }}
      >
        {/* Duplicate list to create infinite loop */}
        {[...ServicesData, ...ServicesData].map((service, index) => (
          <div key={index} className="flex-shrink-0 w-80">
            <ServiceCard {...service} />
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
