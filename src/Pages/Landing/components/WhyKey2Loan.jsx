import {
  Building2,
  Percent,
  Wallet,
  Shield,
  FileText,
  Laptop,
} from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Door Step Service",
    description: "We come to you for documentation and verification",
  },
  {
    icon: Percent,
    title: "Lowest Interest Rate",
    description: "Competitive interest rates for all loan types",
  },
  {
    icon: Wallet,
    title: "Zero Upfront Payment",
    description: "No hidden charges or upfront fees",
  },
  {
    icon: Shield,
    title: "No Hidden Charges",
    description: "Complete transparency in all our services",
  },
  {
    icon: FileText,
    title: "Least Documentation",
    description: "Minimal paperwork required",
  },
  {
    icon: Laptop,
    title: "Digital Process",
    description: "Fast and efficient online application process",
  },
];

const steps = [
  {
    number: "01",
    title: "Click",
    description: "Start your application with a simple click",
    image: "https://picsum.photos/200/200?1",
  },
  {
    number: "02",
    title: "Fill Form",
    description: "Complete our streamlined application form",
    image: "https://picsum.photos/200/200?2",
  },
  {
    number: "03",
    title: "Quick Disbursement",
    description: "Get your loan amount quickly and easily",
    image: "https://picsum.photos/200/200?3",
  },
];

export function WhyKey2Loan() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Why Key2Loan Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          Why <span className="text-emerald-500">Key2Loan</span> ?
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Your trusted partner in financial solutions. We make loan processes
          simple, transparent, and efficient.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-24">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <feature.icon className="w-8 h-8 text-emerald-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* How does it work Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          How does it <span className="text-emerald-500">work</span> ?
        </h2>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        {steps.map((step) => (
          <div key={step.number} className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-6">
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="inline-block px-4 py-1 bg-emerald-100 text-emerald-500 rounded-full text-sm mb-4">
              Step {step.number}
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex justify-center gap-4">
        <button className="px-8 py-3 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors">
          Get Started
        </button>
        <button className="px-8 py-3 border border-emerald-500 text-emerald-500 rounded-full hover:bg-emerald-50 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
}
