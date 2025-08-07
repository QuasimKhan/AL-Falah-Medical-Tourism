import React from "react";
import { FaFacebookF, FaTwitter, FaEnvelope } from "react-icons/fa";
import LanguageSelector from "./LanguageSelector";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <hr className="border-gray-300" />
      <footer className="bg-white text-gray-800 pt-10 pb-5 shadow-inner">
        <div className="max-w-6xl mx-auto px-4 grid gap-6 sm:grid-cols-3 text-center sm:text-left">
          {/* Company Info */}
          <div>
            <Link to="/" className="text-xl font-bold text-cyan-800">
              AL-Falah Medical Tourism
            </Link>
            <p className="text-sm text-orange-500 mt-2">
              Your Global Partner in Medical Tourism.
            </p>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold text-gray-700">About Us</h4>
            <p className="text-sm text-gray-500 mt-2">
              Al-Falah Medical Tourism – Complete healthcare travel services for
              patients worldwide. Treatment coordination, hospital booking, visa
              help, 6-language translation & full assistance from arrival to
              departure.
            </p>
          </div>
          {/* Languages */}
          <div className="flex flex-col items-center gap-2 sm:items-start text-center sm:text-left">
            <h4 className="font-semibold text-gray-700">Languages</h4>
            <LanguageSelector />
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-gray-700">Contact Us</h4>
            <p className="text-sm text-gray-500 mt-2">
              Email:{" "}
              <a
                href="mailto:alfalahmedicaltourism@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-orange-500 transition"
                aria-label="Email"
              >
                alfalahmedicaltourism@gmail.com
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-gray-700">Follow Us</h4>
            <div className="flex justify-center sm:justify-start gap-4 mt-2">
              <a
                href="https://facebook.com/alfalahmedicaltourism"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-orange-500 transition"
                aria-label="Facebook"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="mailto:alfalahmedicaltourism@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-orange-500 transition"
                aria-label="Email"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="border-t border-gray-200 mt-6 pt-4 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} AL-Falah Medical Tourism. All
            rights reserved.
          </p>
          <p className="mt-1">
            Designed by{" "}
            <a
              href="https://www.linkedin.com/in/quasimkhan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Quasim Khan
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
