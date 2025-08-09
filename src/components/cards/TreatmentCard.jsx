import { Link } from "react-router-dom";
import Button from "../Button";

export default function TreatmentCard({ title, img, about }) {
  const treatmentSlug = title.trim().toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex justify-center items-center p-4">
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 w-full max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-xs">
        
        {/* Image */}
        <div className="relative w-full h-52 bg-gray-100 flex items-center justify-center overflow-hidden">
          <img
            src={img || "/images/treatments/treatment-dummy.png"}
            alt={title}
            className="w-auto h-full object-contain p-3"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col justify-between h-[250px]">
          <div>
            <h2 className="text-lg font-semibold text-center text-gray-800">{title}</h2>
            <p className="text-sm text-gray-600 mt-2 line-clamp-6">
              {about}
            </p>
          </div>

          {/* CTA */}
          <div className="pt-3 flex justify-center">
            <Link to={`/treatment/${treatmentSlug}`} className="w-full">
              <Button className="w-full">Read More</Button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
