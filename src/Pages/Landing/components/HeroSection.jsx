import React from 'react'

function HeroSection() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Find the perfect <span className="text-emerald-600">business</span>{" "}
            <br className="hidden sm:block" />
            <span className="text-emerald-600">loan</span> for your growth
          </h1>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Certain aspects of your business might require extra financial
            support. We're here to help you grow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-8 py-3 rounded-md hover:opacity-90 transition-opacity w-full sm:w-auto">
              Apply now
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md hover:bg-gray-50 transition-colors w-full sm:w-auto">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Business Loan EMI Calculator
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Loan Amount"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Annual Interest Rate"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Loan Tenure (In Months)"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <button className="w-full bg-emerald-600 text-white px-8 py-3 rounded-md hover:bg-emerald-700 transition-colors">
                  Calculate EMI
                </button>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm flex items-center justify-center">
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
  )
}

export default HeroSection
