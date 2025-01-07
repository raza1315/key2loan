import React, { useState } from "react";
import {
  CheckCircle,
  DollarSign,
  Percent,
  Clock,
  Upload,
  User,
  Mail,
  Phone,
} from "lucide-react";
import MainNav from "../MainNav/MainNav";
export default function SecuredLoan() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [documents, setDocuments] = useState({
    aadhar: null,
    pan: null,
    gst: null,
    incomeProof: null,
    financialDetails: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!documents.aadhar || !documents.pan || !documents.gst || !documents.incomeProof || !documents.financialDetails){
      alert("Please upload all the documents");
      return;
    }
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", phone: "" });
    setDocuments({
      aadhar: null,
      pan: null,
      gst: null,
      incomeProof: null,
      financialDetails: null,
    });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      setDocuments((prev) => ({
        ...prev,
        [e.target.name]: e.target.files[0] || null,
      }));
    }
  };

  const requiredDocuments = [
    { name: "aadhar", label: "Aadhar Card" },
    { name: "pan", label: "PAN Card" },
    { name: "gst", label: "GST Certificate" },
    { name: "incomeProof", label: "Income Proof" },
    { name: "financialDetails", label: "Financial Details of the Company" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Main Navbar */}
      <MainNav />
      {/* Hero Section */}
      <div className="relative h-[320px] mb-12">
        <img
          src="/securedloan.png"
          alt="Business people discussing secured loans"
          className="w-full h-full object-cover blur-[3px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#21A26B]/80 to-transparent flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white max-w-2xl">
              Secured Business Loan
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
                title: "Higher Loan Amount",
                description:
                  "Access higher loan sums based on collateral stipulations",
                icon: DollarSign,
              },
              {
                title: "Lower Interest Rate",
                description:
                  "Reduced interest rates compared to unsecured loans",
                icon: Percent,
              },
              {
                title: "Quick Disbursement",
                description: "Get funds within 7 business days",
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
                "Collateral Required: Any kind of fixed assets including plots",
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
              src="/Secured-Loan.jpg"
              alt="Eligibility"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-lg p-8 shadow-lg border border-[#21A26B]/20 max-w-3xl mx-auto">
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
                    type: "tel",
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

              <div>
                <h3 className="text-lg font-semibold text-[#21A26B] mb-4">
                  Required Documents
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {requiredDocuments.map((doc) => (
                    <div key={doc.name} className="relative">
                      <label
                        htmlFor={doc.name}
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        {doc.label}
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          id={doc.name}
                          name={doc.name}
                          required
                          onChange={handleFileChange}
                          className="hidden"
                        />
                        <label
                          htmlFor={doc.name}
                          className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50 transition-colors"
                        >
                          <Upload className="w-5 h-5 mr-2 text-gray-400" />
                          <span className="text-sm text-gray-600">
                            {documents[doc.name]
                              ? documents[doc.name]?.name
                              : `Upload ${doc.label}`}
                          </span>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
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
