import { FaHospitalUser, FaHeartbeat, FaUserMd, FaStethoscope } from "react-icons/fa";
import { GiHealing } from "react-icons/gi";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import TreatmentCard from "../components/cards/TreatmentCard";
import { TreatmentsData } from "../data/treatmentsData";
import { Helmet } from "react-helmet-async";

export default function TreatmentPage() {
  // Optional: Assign icons dynamically based on id or title
  const iconMap = {
    1: <FaHospitalUser className="text-blue-500 text-4xl" />,
    2: <FaHeartbeat className="text-red-500 text-4xl" />,
    3: <FaUserMd className="text-green-500 text-4xl" />,
    4: <FaStethoscope className="text-indigo-500 text-4xl" />,
    5: <GiHealing className="text-pink-500 text-4xl" />,
    9: <MdOutlineHealthAndSafety className="text-amber-500 text-4xl" />
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">

      {/* SEO Meta Tags */} <Helmet>
        <title>World-Class Medical Treatments - AL-Falah Medical Tourism</title>
        <meta
          name="description"
          content="Explore top medical treatments offered by AL-Falah Medical Tourism in India. Connect with leading specialists and hospitals for personalized care."
        />
        <meta
          name="keywords"
          content="medical treatments, healthcare India, AL-Falah Medical Tourism, specialist treatments, hospital treatments"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://alfalahmedicaltourism.in/treatments" />
        <meta property="og:title" content="World-Class Medical Treatments - AL-Falah Medical Tourism" />
        <meta
          property="og:description"
          content="Explore a wide range of medical treatments facilitated by AL-Falah Medical Tourism with top hospitals and specialists."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alfalahmedicaltourism.in/treatments" />
        <meta property="og:image" content="https://yourdomain.com/images/medical-treatments.jpg" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4">
        
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Our <span className="text-blue-600">Treatments</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            AL-Falah Medical Tourism connects you with the best hospitals and specialists in India,
            offering world-class treatments with personalized care.
          </p>
        </div>

        {/* Treatments Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {TreatmentsData.map((treatment) => (
            <div key={treatment.id} className="flex flex-col items-center">
              {/* Icon */}

              {/* Card */}
              <TreatmentCard {...treatment} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
