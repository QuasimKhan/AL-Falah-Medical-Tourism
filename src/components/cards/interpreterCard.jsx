import { Link } from "react-router-dom";
import Button from "../Button";

export default function Card(props) {
  const nameSlug = props.name.trim().toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex justify-center items-center p-4">
      <div
        className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
        style={{ width: "300px", height: "500px" }} // fixed width & height
      >
        {/* Image */}
        <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
          <img
            src={props.img || "/images/interpreters/interpreter-dummy.png"}
            alt={props.name}
            className="w-full h-full object-contain p-2"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col justify-between h-[calc(500px-192px)]">
          <div className="space-y-2 overflow-hidden">
            <div>
 <h2 className="text-lg font-bold text-gray-800 text-center truncate">
              {props.name}
            </h2>
            <p className="text-sm font-medium text-gray-600 text-center">
              {props.nationality}
            </p>
            </div>
           

            <p className="text-xs text-center text-gray-500 truncate">
              {props.designation}
            </p>

            <div className="text-xs text-gray-600 space-y-1">
              <p className="truncate">
                <span className="font-medium">Languages:</span>{" "}
                {props.languages.join(", ")}
              </p>
              <p className="truncate">
                <span className="font-medium">Expertise:</span> {props.expertise}
              </p>
              <p className="truncate">
                <span className="font-medium">Experience:</span> {props.experience}
              </p>
              <p className="truncate">
                <span className="font-medium">Email:</span> {props.email}
              </p>
              <p className="truncate">
                <span className="font-medium">Contact:</span> {props.contact}
              </p>
            </div>
          </div>

          

          <div className="pt-3 text-center">
            <Link
              to={`/appointment`}
            >
              <Button>Book Now</Button>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}
