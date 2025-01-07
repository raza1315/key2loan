import React, { useState } from "react";
import MainNav from "../MainNav/MainNav";

export default function SecuredLoan() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", phone: "" });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {/* Main Navbar */}
      <MainNav />

      <div className="max-w-4xl mx-auto p-6">
        <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
          <img
            src="/placeholder.svg?height=256&width=896"
            alt="Business people discussing secured loans"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#004D40]/80 to-transparent flex items-center">
            <h1 className="text-4xl font-bold text-white ml-8">
              Secured Business Loans
            </h1>
          </div>
        </div>

        {/* Features & Benefits Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-[#004D40] mb-6">
            Features & Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-[#00A67E]/20">
              <div className="w-16 h-16 mb-4 relative">
                <img
                  src="/placeholder.svg?height=64&width=64"
                  alt="Higher Loan Amount"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#00A67E] mb-2">
                Higher Loan Amount
              </h3>
              <p className="text-gray-700">
                Enables access to higher loan sums based on collateral
                stipulations
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-[#00A67E]/20">
              <div className="w-16 h-16 mb-4 relative">
                <img
                  src="/placeholder.svg?height=64&width=64"
                  alt="Lower Interest Rate"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#00A67E] mb-2">
                Lower Interest Rate
              </h3>
              <p className="text-gray-700">
                Generally presents reduced interest rates compared to loans
                without security
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-[#00A67E]/20">
              <div className="w-16 h-16 mb-4 relative">
                <img
                  src="/placeholder.svg?height=64&width=64"
                  alt="Quick Disbursement"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#00A67E] mb-2">
                Quick Disbursement
              </h3>
              <p className="text-gray-700">
                Facilitating immediate access to funds within 7 business days
              </p>
            </div>
          </div>
        </div>

        {/* Eligibility Criteria Section */}
        <div className="bg-[#004D40] text-white rounded-lg p-8 mb-10 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl font-semibold mb-6">
              Eligibility Criteria
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00A67E] rounded-full"></div>
                <span>
                  Collateral Required: Any kind of fixed assets including plots
                </span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00A67E] rounded-full"></div>
                <span>Age: Borrower should be aged between 21-70</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00A67E] rounded-full"></div>
                <span>Credit Score Required: Upto 750</span>
              </li>
            </ul>
          </div>
          <div className="absolute right-0 bottom-0 w-40 h-40 opacity-10">
            <img
              src="/placeholder.svg?height=160&width=160"
              alt="Eligibility"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-lg p-8 shadow-lg border border-[#00A67E]/20">
          <h2 className="text-2xl font-semibold text-[#004D40] mb-6">
            Apply Now
          </h2>

          {submitted ? (
            <div className="text-center py-8">
              <div className="w-24 h-24 mx-auto mb-4 relative">
                <img
                  src="/placeholder.svg?height=96&width=96"
                  alt="Success"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="text-[#00A67E] text-lg font-semibold mb-2">
                Thank you for your application!
              </div>
              <p className="text-gray-600">
                We will contact you shortly to discuss your secured loan
                requirements.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00A67E] focus:border-transparent outline-none transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00A67E] focus:border-transparent outline-none transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00A67E] focus:border-transparent outline-none transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#00A67E] text-white px-8 py-3 rounded-lg hover:bg-[#00A67E]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
