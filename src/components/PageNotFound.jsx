import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 px-4 py-20">
      <h1 className="text-6xl font-extrabold text-red-500 animate-bounce">404</h1>
      <p className="mt-4 text-2xl font-semibold text-gray-800">Oops! Page Not Found</p>
      <p className="text-gray-500 text-sm mt-2 text-center max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      <Link
        to="/"
        className="mt-6 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default PageNotFound;
