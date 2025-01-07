import React, { useState } from "react";
import { CheckCircle, DollarSign, Percent, Clock } from "lucide-react";
import MainNav from "../MainNav/MainNav";
export default function UnSecuredLoan() {
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
    <div className="bg-gray-50 min-h-screen">
      <MainNav />
      {/* Hero Section */}
      <div className="relative h-[300px] w-3/4 mx-auto mb-12">
        <img
          src="/unsecuredloan.png"
          alt="Business people discussing secured loans"
          className="w-full h-full object-cover blur-[3px] opacity-[0.9]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#21A26B]/80 to-transparent flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white max-w-2xl">
              UnSecured Business Loan
            </h1>
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
                "Credit Score Required: Up to 750",
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
              className="w-full h-full scale-[2.2] mr-16 object-contain"
            />
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-lg p-8 shadow-lg border border-[#21A26B]/20 max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#21A26B] mb-8 text-center">
            Apply Now
          </h2>

          {submitted ? (
            <div className="text-center py-8">
              <div className="w-24 h-24 mx-auto mb-4 relative">
                <img
                  src="https://picsum.photos/200/200?random=5"
                  alt="Success"
                  className="w-full h-full object-contain rounded-full"
                />
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
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                {
                  name: "name",
                  label: "Full Name",
                  type: "text",
                  placeholder: "Enter your full name",
                },
                {
                  name: "email",
                  label: "Email Address",
                  type: "email",
                  placeholder: "Enter your email address",
                },
                {
                  name: "phone",
                  label: "Phone Number",
                  type: "tel",
                  placeholder: "Enter your phone number",
                },
              ].map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    required
                    // value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#21A26B] focus:border-transparent outline-none transition-colors"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}

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
