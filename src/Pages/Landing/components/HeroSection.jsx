import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import EmiCalculator from "./EmiCalculator";

const heroContents = [
  {
    title: (
      <>
        Find the perfect <span className="text-[#21A26B]">business</span>{" "}
        <br className="hidden sm:block" />
        <span className="text-[#21A26B]">loan</span> for your growth
      </>
    ),
    description:
      "Certain aspects of your business might require extra financial support. We're here to help you grow.",
  },
  {
    title: (
      <>
        Unlock your business <span className="text-[#21A26B]">potential</span>{" "}
        <br className="hidden sm:block" />
        with our <span className="text-[#21A26B]">financial solutions</span>
      </>
    ),
    description:
      "The Smarter Way to Borrow: Lowest Interest, Maximum Benefit..",
  },
  {
    title: (
      <>
        Empower your <span className="text-[#21A26B]">entrepreneurial</span>{" "}
        <br className="hidden sm:block" />
        <span className="text-[#21A26B]">journey</span> with us
      </>
    ),
    description: "Empowering Your Business with the Right Financial Support",
  },
];

function HeroSection({ scrollToLoanType }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroContents.length);
      setDirection("right");
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % heroContents.length);
    setDirection("right");
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + heroContents.length) % heroContents.length
    );
    setDirection("left");
  };

  return (
    <div className="relative sm:px-0 px-2">
      {/* radial bg absolute */}
      <div className="sm:flex hidden absolute bg-green-100 opacity-70 w-[650px] mt-10 h-[210px] rounded-full blur-3xl top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-1"></div>

      {/* Hero Section */}
      <section className="py-16 px-4 z-10 relative">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="relative overflow-hidden h-[300px] sm:h-[360px]">
            {heroContents.map((content, index) => (
              <div
                key={index}
                className={`absolute w-full transition-all duration-500 ease-in-out ${
                  index === currentSlide
                    ? "opacity-100 translate-x-0"
                    : index ===
                        (currentSlide - 1 + heroContents.length) %
                          heroContents.length && direction === "right"
                    ? "opacity-0 -translate-x-full"
                    : index === (currentSlide + 1) % heroContents.length &&
                      direction === "left"
                    ? "opacity-0 translate-x-full"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mt-28 tracking-wide">
                  {content.title}
                </h1>
                <p className="text-[#878D97] mb-8 mt-6 max-w-xl mx-auto">
                  {content.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <button className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity w-full sm:w-auto z-10 cursor-pointer">
              Apply now
            </button>
            <button className="bg-white border border-[#E2E8F0] text-gray-500 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors w-full sm:w-auto z-10 cursor-pointer"
            onClick={scrollToLoanType}
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 left-4 right-4 flex justify-between z-20">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors sm:ml-16 ml-0"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors sm:mr-16 mr-0"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 " />
          </button>
        </div>
      </section>

      {/* Calculator Section */}
      <EmiCalculator />
    </div>
  );
}

export default HeroSection;
