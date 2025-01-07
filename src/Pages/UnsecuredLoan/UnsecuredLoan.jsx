import React, { useRef, useState } from "react";
import {
  CheckCircle,
  DollarSign,
  Percent,
  Clock,
  User,
  Mail,
  Phone,
} from "lucide-react";
import MainNav from "../MainNav/MainNav";

export default function SecuredLoan() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    otherBusinessType: "",
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
    setFormData({
      name: "",
      email: "",
      phone: "",
      businessType: "",
      otherBusinessType: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "businessType" && value !== "others") {
      setFormData((prev) => ({ ...prev, otherBusinessType: "" }));
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <MainNav />

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Unsecured</span>
              <span className="block text-[#21A26B]">Business Loan</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              An unsecured business loan is a type of loan that does not require
              the borrower to provide any collateral, such as property or other
              assets, to secure the loan. Instead, the loan is granted based on
              the borrower's creditworthiness, business performance, and
              financial history
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-start">
              <div
                className="rounded-md shadow"
                onClick={() => {
                  formRef.current.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#21A26B] hover:bg-[#1c8f5c] md:py-4 md:text-lg md:px-10">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
          <div className="relative h-64 sm:h-72 md:h-96 lg:h-full">
            <img
              src="/unsecuredloan.png"
              alt="Business people discussing secured loans"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-xl h-full w-full"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#21A26B]/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-12">
        {/* Features & Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-[#21A26B] mb-8 text-center">
            Features & Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Zero Collateral Required",
                description:
                  "Acquire a business loan without collateral or security, which reduces the borrower's risk",
                icon: DollarSign,
              },
              {
                title: "Flexible Tenure",
                description:
                  "You can repay it in repayment terms tailored to business needs",
                icon: Percent,
              },
              {
                title: "Quick Disbursement",
                description:
                  "Facilitating immediate access to funds within 7 business days",
                icon: Clock,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg border border-[#21A26B]/20 transition-all hover:shadow-xl hover:-translate-y-1 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 mb-4 rounded-full bg-[#21A26B]/10 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-[#21A26B]" />
                </div>
                <h3 className="text-xl font-semibold text-[#21A26B] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#90969E]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Eligibility Criteria Section */}
        <div className="bg-[#21A26B] text-white rounded-lg p-8 mb-16 relative overflow-hidden shadow-lg">
          <div className="relative z-10">
            <h2 className="text-3xl font-semibold mb-6">
              Eligibility Criteria
            </h2>
            <ul className="space-y-4">
              {[
                "Turnover: Minimum 29K/Per day",
                "Age: Borrower should be aged between 21-70",
                "Credit Score Required: Minimum 750",
              ].map((criterion, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-white" />
                  <span className="text-lg">{criterion}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute right-0 bottom-0 w-64 h-64 opacity-50">
            <img
              src="/unsecured-business-loan.png"
              alt="Eligibility"
              className="w-full h-full scale-[2.1] object-contain"
            />
          </div>
        </div>
        {/* Application Form */}
        <div
          className="bg-white rounded-lg p-8 shadow-lg border border-[#21A26B]/20 max-w-3xl mx-auto"
          ref={formRef}
        >
          <h2 className="text-3xl font-semibold text-[#21A26B] mb-8 text-center">
            Apply Now
          </h2>

          {submitted ? (
            <div className="text-center py-8">
              <div className="w-24 h-24 mx-auto mb-4 relative">
                <CheckCircle className="w-full h-full text-[#21A26B]" />
              </div>
              <div className="text-[#21A26B] text-2xl font-semibold mb-4">
                Thank you for your application!
              </div>
              <p className="text-gray-600 text-lg">
                We will contact you shortly to discuss your secured loan
                requirements.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    name: "name",
                    label: "Full Name",
                    type: "text",
                    placeholder: "Enter your full name",
                    icon: User,
                  },
                  {
                    name: "email",
                    label: "Email Address",
                    type: "email",
                    placeholder: "Enter your email address",
                    icon: Mail,
                  },
                  {
                    name: "phone",
                    label: "Phone Number",
                    type: "number",
                    placeholder: "Enter your phone number",
                    icon: Phone,
                  },
                ].map((field) => (
                  <div key={field.name} className="relative">
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {field.label}
                    </label>
                    <div className="relative">
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        required
                        value={formData[field.name]}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#21A26B] focus:border-transparent outline-none transition-colors"
                        placeholder={field.placeholder}
                      />
                      <field.icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="businessType"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Business Type
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#21A26B] focus:border-transparent outline-none transition-colors"
                  >
                    <option value="">Select Business Type</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="trading">Trading</option>
                    <option value="hospitality">Hospitality</option>
                    <option value="agriculture">Agriculture</option>
                    <option value="others">Others</option>
                  </select>
                </div>
                {formData.businessType === "others" && (
                  <div>
                    <label
                      htmlFor="otherBusinessType"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Specify Other Business Type
                    </label>
                    <input
                      type="text"
                      id="otherBusinessType"
                      name="otherBusinessType"
                      value={formData.otherBusinessType}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#21A26B] focus:border-transparent outline-none transition-colors"
                      placeholder="Enter your business type"
                    />
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#21A26B] text-white px-8 py-3 rounded-lg hover:bg-[#21A26B]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg font-semibold"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
