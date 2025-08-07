import { Link } from "react-router-dom";
import Button from "../Button";
import { FaUserMd, FaMapMarkerAlt, FaLanguage, FaHospitalSymbol, FaRegClock } from "react-icons/fa";

export default function DoctorCard(props) {
  const nameSlug = props.name.trim().toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex justify-center items-center p-4">
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 w-full max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-xs">
        {/* Image */}
        <div className="relative w-full h-52 bg-gray-100 flex items-center justify-center overflow-hidden">
          <img
            src={props.img}
            alt={props.name}
            className="w-auto h-full object-contain p-3"
          />
        </div>

        {/* Content */}
        <div className="p-4 space-y-2 flex flex-col justify-between h-[300px]">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-center text-gray-800">{props.name}</h2>
            <p className="text-center text-sm text-cyan-700">{props.designation}</p>
            <p className="text-center text-xs text-gray-500">{props.specialization}</p>

            <div className="text-sm text-gray-600 space-y-1 mt-2">
                <p className="flex items-center gap-2">
                    <FaUserMd className="text-blue-600" />
                    <span><strong>Qualifications:</strong> {props.qualifications}</span>
                </p>
              <p className="flex items-center gap-2">
                <FaRegClock className="text-orange-600" />
                <span><strong>Experience:</strong> {props.experience}</span>
              </p>
              <p className="flex items-center gap-2">
                <FaLanguage className="text-cyan-600" />
                <span><strong>Languages:</strong> {props.languagesSpoken?.join(", ")}</span>
              </p>
              <p className="flex items-center gap-2">
                <FaHospitalSymbol className="text-green-600" />
                <span><strong>Hospital:</strong> {props.hospital}</span>
              </p>
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500" />
                <span>{props.location}</span>
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-3 flex justify-center items-center gap-2 text-center">
  <Link to={`/doctors/${nameSlug}`} className="w-1/2">
    <Button className="w-full">Know More</Button>
  </Link>
  <Link to="/appointment" className="w-1/2">
    <Button className="w-full" variant="secondary">
      Book Now
    </Button>
  </Link>
</div>

        </div>
      </div>
    </div>
  );
}
