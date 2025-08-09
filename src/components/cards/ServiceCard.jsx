import { Link } from "react-router-dom";
import Button from "../Button";

export default function ServiceCard({ title, icon: Icon, about, slug }) {
  const serviceSlug = slug || title.trim().toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex justify-center items-center p-4">
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 w-full max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-xs group">
        
        {/* Icon Section */}
        <div className="flex items-center justify-center w-full h-32 bg-gradient-to-r from-cyan-900 to-cyan-500 rounded-t-xl text-white">
          {Icon ? (
            <Icon className="text-6xl group-hover:scale-110 transition-transform duration-300" />
          ) : (
            <span className="text-4xl font-bold">⚙</span>
          )}
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col justify-between h-[230px]">
          <div>
            <h2 className="text-lg font-semibold text-center text-gray-800">
              {title}
            </h2>
            <p className="text-sm text-gray-600 mt-2 line-clamp-7">
              {about}
            </p>
          </div>

          {/* CTA
          <div className="pt-3 flex justify-center">
            <Link to={`/service/${serviceSlug}`} className="w-full">
              <Button className="w-full">Learn More</Button>
            </Link>
          </div> */}
        </div>

      </div>
    </div>
  );
}
