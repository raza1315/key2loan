import React from "react";

function HeroSection() {
  return (
    <div className="relative">
      {/* radial bg absolute */}
      <div className="absolute bg-green-100 opacity-70 w-[600px] h-[210px] rounded-full blur-3xl top-[53%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-1 "></div>

      {/* Hero Section */}
      <section className="py-16 px-4 z-10">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mt-28 z-100">
            Find the perfect <span className="text-[#21A26B]">business</span>{" "}
            <br className="hidden sm:block" />
            <span className="text-[#21A26B]">loan</span> for your growth
          </h1>
          <p className="text-[#878D97] mb-8 mt-6 max-w-xl mx-auto">
            Certain aspects of your business might require extra financial
            support. We're here to help you grow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity w-full sm:w-auto z-10 cursor-pointer">
              Apply now
            </button>
            <button className="bg-white border border-[#E2E8F0] text-gray-500 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors w-full sm:w-auto z-10 cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 px-4 bg-white z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-center mb-12 z-10">
            Business Loan EMI Calculator
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-[#E2E8F0] z-10">
              <div className="space-y-6">
                <div>
                  <input
                    type="number"
                    placeholder="Loan Amount"
                    className="w-full px-4 py-3 font-semibold rounded-md border border-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Annual Interest Rate"
                    className="w-full px-4 py-3 font-semibold rounded-md border border-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Loan Tenure (In Months)"
                    className="w-full px-4 py-3 font-semibold rounded-md border border-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <button className="w-full bg-emerald-600 text-[#CCE4DA] px-8 py-3 rounded-md hover:bg-emerald-700 transition-colors">
                  Calculate EMI
                </button>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-[#E2E8F0] flex items-center justify-center z-10">
              <div className="w-48 h-48 relative">
                <div className="absolute inset-0 bg-gradient-radial from-emerald-100 via-transparent to-transparent rounded-full"></div>
                <img
                  src="/placeholder.svg"
                  alt="EMI Calculator"
                  width={192}
                  height={192}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
