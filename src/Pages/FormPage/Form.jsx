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

export default function Form() {
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
    <div className="bg-gray-50 ">
      <MainNav />

      <div className="container mx-auto px-6 py-16 ">
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
