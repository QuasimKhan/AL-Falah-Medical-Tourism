import { useParams, Link } from "react-router-dom";
import { TreatmentsData } from "../data/treatmentsData";
import { marked } from "marked";
import Button from "../components/Button";
import * as Icons from "react-icons/fa";

export default function AboutTreatment() {
  const { treatmentName } = useParams();
  const formattedName = treatmentName.replace(/-/g, " ").toLowerCase();
  const treatment = TreatmentsData.find(
    (t) => t.title.toLowerCase() === formattedName
  );

  if (!treatment) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Treatment Not Found</h1>
        <Link to="/treatments">
          <Button>Back to Treatments</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-4">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center flex items-center justify-center gap-3">
          <Icons.FaHeartbeat className="text-red-500" /> {treatment.title}
        </h1>

        {/* Image */}
        <div className="w-full h-72 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center mb-10 shadow-lg">
  <img
    src={treatment.img}
    alt={treatment.title}
    className="w-full h-full object-cover"
    loading="lazy"
  />
</div>


        {/* Render sections */}
        {treatment.sections?.map((section, idx) => {
          const IconComponent = Icons[section.icon] || Icons.FaInfoCircle;
          return (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 mb-6 border-l-4 border-orange-500"
            >
              <h2 className="text-2xl font-semibold flex items-center gap-3 text-cyan-900 mb-4">
                <IconComponent className="text-orange-500" /> {section.title}
              </h2>
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: marked(section.content) }}
              />
            </div>
          );
        })}

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to={`/appointment`}>
            <Button>Book Appointment</Button>
          </Link>
          <Link to="/treatments">
            <Button variant="secondary">Back to Treatments</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
