import React, { useState } from "react";
import CTAButton from "./CTAButton";
import logo from "../../public/images/mainLogo.png";

export default function Navbar({ isModalOpen, setIsModalOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className="fixed w-full bg-amber-50 shadow-sm backdrop-blur-md z-50"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row-reverse justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <span className="text-3xl font-bold text-[#137131]">Urinexa</span>
            <img src={logo} className="w-9" alt="Logo" />
          </a>

          {/* Menu button for mobile */}
          {/* <button onClick={toggleMenu} className="md:hidden focus:outline-none">
            <div className="relative w-6 h-6">
              <span
                className={`absolute top-0 left-0 h-1 w-full bg-[#137131] transform transition-transform duration-300 ease-in-out ${
                  isOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              ></span>
              <span
                className={`absolute top-2.5 left-0 h-1 w-full bg-[#137131] transition-opacity duration-300 ease-in-out ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute top-5 left-0 h-1 w-full bg-[#137131] transform transition-transform duration-300 ease-in-out ${
                  isOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              ></span>
            </div>
          </button> */}

          {/* Menu items for desktop */}
          <div className="hidden md:flex flex-row-reverse items-center gap-2">
            <a
              href="#ben"
              className="text-gray-600 hover:text-gray-900 mr-8 font-bold"
            >
              المميزات
            </a>
            <a
              href="#ing"
              className="text-gray-600 hover:text-gray-900 mr-8 font-bold"
            >
              المكونات
            </a>
            <a
              href="#rev"
              className="text-gray-600 hover:text-gray-900 mr-8 font-bold"
            >
              التقييمات
            </a>
            <CTAButton
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          </div>
        </div>
      </div>

      {/* Sliding menu */}
      {/* <div
        className={`fixed top-0 right-0 h-screen w-1/2 bg-green-700 bg-opacity-60 backdrop-blur-lg shadow-lg transform z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 left-4 text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          <span className="sr-only">Close menu</span>
        </button>
        <div className="flex flex-col items-center justify-center space-y-6 mt-16">
          <a
            href="#ben"
            className=" text-[#137131] hover:font-bold text-xl py-2 bg-white w-full text-center font-bold transition"
            onClick={() => setIsOpen(false)}
          >
            المميزات
          </a>
          <a
            href="#ing"
            className=" text-[#137131] hover:font-bold text-xl py-2 bg-white w-full text-center font-bold transition"
            onClick={() => setIsOpen(false)}
          >
            المكونات
          </a>
          <a
            href="#rev"
            className=" text-[#137131] hover:font-bold text-xl py-2 bg-white w-full text-center font-bold transition"
            onClick={() => setIsOpen(false)}
          >
            التقييمات
          </a>
          <CTAButton />
        </div>
      </div> */}

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed h-screen inset-0 bg-green-600 bg-opacity-20 backdrop-blur-md z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
}
