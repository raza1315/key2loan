import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What documents are needed to apply for a business loan?",
      answer:
        "Documents may include financial statements, tax returns, and business licenses.",
    },
    {
      question: "What are business loans used for?",
      answer:
        "Business loans can be used for working capital, renovations, technology and staffing, business acquisitions, real estate purchases, and more.",
    },
    {
      question: "What is the purpose of the business loan?",
      answer:
        "A business loan gives you access to capital so you can invest it into your business.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-all duration-300"
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              <div
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                <ChevronDown className="h-5 w-5 text-[#27ae60]" />
              </div>
            </button>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-sm text-gray-600 text-center">
          Disclaimer: Key2loan is a loan aggregator and is authorized to provide
          services on behalf of its partners.
        </p>
      </div>
    </div>
  );
}
