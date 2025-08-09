
import { Link } from "react-router-dom";
import Button from "../components/Button";
import ServiceCard from "../components/cards/ServiceCard";
import { ServicesData } from "../data/servicesData";

export default function ServicePage() {
  // Example services data
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Our <span className="text-cyan-600">Services</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At <span className="font-semibold text-cyan-600">AL-Falah Medical Tourism</span>, we provide a wide range of support 
            services to make your treatment journey in India seamless, affordable, and stress-free.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {ServicesData.map((service) => (
            <ServiceCard 
              key={service.id} 
              {...service}
            />
          ))}
        </div>

        {/* Book Appointment Button */}
        <div className="mt-12 text-center">
          <Link to="/appointment">
            <Button>Book Appointment</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
