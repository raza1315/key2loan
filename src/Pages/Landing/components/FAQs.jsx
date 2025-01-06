import { useState } from "react";
import { ChevronDown } from "lucide-react";

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

 function FAQs() {
  // const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-12">
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
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
              >
                <span className="font-medium text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg text-sm text-gray-600 text-center">
          <p>
            Disclaimer: Key2loan is a loan aggregator and is authorized to
            provide services on behalf of its partners.
          </p>
        </div>
      </div>
    </section>
  );
}
export default FAQs