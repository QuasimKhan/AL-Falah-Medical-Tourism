import { useEffect, useRef, useState } from "react";
import { FaGlobe } from "react-icons/fa";

const LanguageSelector = () => {
  const [show, setShow] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const scriptId = "google-translate-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,ar,fr,es,ru,fa,ur,hi",
            layout: window.google.translate.TranslateElement.InlineLayout.VERTICAL,
            autoDisplay: false,
          },
          "google_translate_element"
        );
      };
    }
  }, []);


  useEffect(() => {
  const interval = setInterval(() => {
    const frame = document.querySelector('.goog-te-banner-frame');
    if (frame) {
      frame.remove();
      document.body.style.top = '0px';
    }
  }, 1000); // Check every second

  return () => clearInterval(interval);
}, []);

  return (
    <div ref={containerRef} className="relative ml-4">
      <button
        onClick={() => setShow((prev) => !prev)}
        className="flex items-center px-3 py-2 bg-gray-200 rounded-full hover:bg-gradient-to-r from-orange-500 to-red-500 hover:text-white text-gray-800 text-sm font-medium"
      >
        <FaGlobe className="mr-1" /> Language
      </button>

      {/* Always mounted, only hidden/shown using CSS */}
      <div
        id="google_translate_element"
        className={`absolute right-0 mt-2 p-2 bg-white border rounded-lg shadow-md z-50 ${
          show ? "block" : "hidden"
        }`}
      ></div>
    </div>
  );
};

export default LanguageSelector;
