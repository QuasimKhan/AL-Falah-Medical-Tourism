import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const pages = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Interpreters", link: "/interpreters" },
    { name: "Doctors", link: "/doctors" },
    { name: "Hospitals", link: "/hospitals" },
    { name: "Contact Us", link: "/contact" },
  ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

  useEffect(() => {
    setIsOpen(false); // Close mobile menu when route changes
  }, [location]);

  const isActive = (path)=> {
    return location.pathname === path;
  }

  return (
    <nav
      className={`h-20 fixed top-0 left-0 w-full z-50 font-inter bg-white shadow-md text-gray-900`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-16 sm:w-20 md:w-24 lg:w-24 xl:w-28 object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4 text-lg font-medium">
            {pages.map((key) => {
              return (
                <Link
                  key={key.name}
                  to={key.link}
                  className={`px-4 py-2 rounded-md transition font-medium ${
                    isActive(key.link)
                      ? "bg-yellow-400 text-gray-900"
                      : "text-gray-900 hover:bg-yellow-400 hover:text-gray-900"
                  }`}
                >
                  {key.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:flex items-center gap-3">
            <button className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full hover:bg-yellow-300 transition font-semibold shadow-md">
              Book Appointment
            </button>
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none text-gray-900`}
            >
              {isOpen ? (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-3 flex flex-col justify-center items-center bg-white shadow-md">
          {pages.map((key) => {
            return (
              <Link
                key={key.name}
                to={key.link}
                className={`block px-4 py-2 rounded-md w-full text-center transition font-medium ${
                  isActive(key.link)
                    ? "bg-yellow-400 text-gray-900"
                    : "text-gray-800 hover:bg-yellow-400 hover:text-gray-900"
                }`}
              >
                {key.name}
              </Link>
            );
          })}
          <button className="w-full bg-yellow-400 text-gray-900 px-4 py-2 rounded-full hover:bg-yellow-300 transition font-semibold">
            Book Appointment
          </button>
          <LanguageSelector />
        </div>
      )}
    </nav>
  );
}
