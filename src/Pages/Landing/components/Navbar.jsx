"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full border-b border-gray-200 ${
        isScrolled
          ? "fixed top-0 bg-white/80 backdrop-blur-md shadow-sm"
          : "relative bg-white"
      } transition-all duration-300 z-999`}
    >
      <div className=" mx-auto  px-10 py-4">
        <div className="flex items-center justify-between">
          <div className="w-1/3">
            <img
              src="/key2loanlogo.png"
              alt="Key2Loan"
              className="h-10 w-auto scale-[1.65]"
            />
          </div>
          <div className="flex items-center space-x-8 w-1/3">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 font-medium">
              <p className="text-[#8C939C]  cursor-pointer hover:text-gray-900 transition-colors">
                Home
              </p>
              <div className="relative">
                <button
                  className="text-[#8C939C]  cursor-pointer hover:text-gray-900 flex items-center transition-colors"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services
                  <svg
                    className={`w-4 h-4 ml-1 transform transition-transform ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                    <p className="block px-4 py-2 text-[#8C939C]  cursor-pointer hover:bg-gray-100 transition-colors">
                      Service 1
                    </p>
                    <p className="block px-4 py-2 text-[#8C939C]  cursor-pointer hover:bg-gray-100 transition-colors">
                      Service 2
                    </p>
                    <p className="block px-4 py-2 text-[#8C939C]  cursor-pointer hover:bg-gray-100 transition-colors">
                      Service 3
                    </p>
                  </div>
                )}
              </div>
              <p className="text-[#8C939C]  cursor-pointer hover:text-gray-900 transition-colors">
                About Us
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-10 font-medium">
            <p className="text-[#8C939C] cursor-pointer hover:text-gray-900 transition-colors">
              Become our partner
            </p>
            <p className="text-[#8C939C] cursor-pointer hover:text-gray-900 transition-colors">
              Support
            </p>
            <p className="text-green-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </p>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsServicesOpen(!isServicesOpen)}
          >
            <svg
              className="w-6 h-6"
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
          </button>
        </div>

        {/* Mobile menu */}
        {isServicesOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <p className="text-[#8C939C]  cursor-pointer hover:text-gray-900">Home</p>
              <p className="text-[#8C939C]  cursor-pointer hover:text-gray-900">Services</p>
              <p className="text-[#8C939C]  cursor-pointer hover:text-gray-900">About Us</p>
              <p className="text-[#8C939C]  cursor-pointer hover:text-gray-900">
                Become our partner
              </p>
              <p className="text-[#8C939C]  cursor-pointer hover:text-gray-900">Support</p>
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
}
