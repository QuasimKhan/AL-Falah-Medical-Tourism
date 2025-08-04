import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/img4.jpg",
    heading: "World-Class Healthcare",
    description: "We connect you with top hospitals and doctors across borders.",
  },
  {
    src: "/images/img2.jpg",
    heading: "Personalized Care",
    description: "Tailored medical solutions just for you.",
  },
  {
    src: "/images/img3.jpg",
    heading: "Trusted by Thousands",
    description: "Your health, our mission—every step of the way.",
  },
];

export default function Carousels() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 7000); // auto-slide every 7s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-fit mx-auto overflow-hidden shadow mt-22">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <div key={idx} className="relative min-w-full h-[350px]">
            <img
              src={slide.src}
              alt={`Slide ${idx}`}
              className=" inset-0 max-h-full w-full object-contain object-center"
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-yellow-400/40 p-6 rounded-xl text-center max-w-lg">
                <h2 className="text-3xl font-bold text-white drop-shadow-md">
                  {slide.heading}
                </h2>
                <p className="mt-2 text-white text-lg drop-shadow-sm">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
