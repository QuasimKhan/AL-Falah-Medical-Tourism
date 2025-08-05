import { Link } from "react-router-dom";

export default function Card(props) {
  const nameSlug = props.name.trim().toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex justify-center items-center p-4">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm w-full border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <img
            src={props.img}
            alt={props.name}
            className="w-full h-full object-contain p-2"
          />
        </div>

        {/* Content */}
        <div className="p-5 space-y-2">
          <h2 className="text-xl font-bold text-gray-800 text-center">
            {props.name}
          </h2>

          <p className="text-sm text-center text-gray-500">
            {props.designation} | {props.nationality}
          </p>

          <div className="text-sm text-gray-600">
            <p>
              <span className="font-medium">Languages:</span>{" "}
              {props.languages.join(", ")}
            </p>
            <p>
              <span className="font-medium">Expertise:</span> {props.expertise}
            </p>
            <p>
              <span className="font-medium">Experience:</span>{" "}
              {props.experience}
            </p>
            <p>
              <span className="font-medium">Email:</span> {props.email}
            </p>
            <p>
              <span className="font-medium">Contact:</span> {props.contact}
            </p>
          </div>

          <div className="pt-3 text-center">
            <Link
              to={`/interpreters/${nameSlug}`}
              className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-6 rounded-lg font-semibold text-sm hover:scale-105 hover:shadow-lg transition-transform"
            >
              Know More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
