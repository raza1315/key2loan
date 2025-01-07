import React from "react";
import {
  BadgeCheck,
  Users,
  Building,
  ArrowRight,
  Wallet,
  BarChartIcon as ChartBar,
  Clock,
} from "lucide-react";

const stats = [
  { label: "idhar change karna hain", value: "10+" },
  { label: "Happy Clients", value: "50+" },
  { label: "Disbursed Amount", value: "₹10Cr+" },
  { label: "Team Members", value: "30+" },
];

const values = [
  {
    icon: Users,
    title: "Customer First",
    description:
      "We prioritize our customers' needs and provide tailored financial solutions.",
  },
  {
    icon: Building,
    title: "Transparency",
    description:
      "Clear and honest communication about all our loan processes and terms.",
  },
  {
    icon: BadgeCheck,
    title: "Excellence",
    description:
      "Committed to delivering the highest quality financial services.",
  },
];

const timeline = [
  {
    year: "2024",
    title: "Foundation",
    description:
      "Key2Loan was established with the goal of bridging the gap between lenders and borrowers.",
  },
  {
    year: "2024",
    title: "Digital Platform",
    description: "Launched our innovative digital loan application platform.",
  },
  {
    year: "2024",
    title: "Expansion",
    description:
      "Expanded our services to include multiple loan types and financial products.",
  },
];

export default function About({ aboutRef, scrollToLoanType }) {
  return (
    <section
      className="relative overflow-hidden pt-24 sm:pt-18 pb-10 sm:px-0 px-2"
      ref={aboutRef}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4ade8030_1px,transparent_1px),linear-gradient(to_bottom,#4ade8030_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="container relative mx-auto px-4 space-y-24">
        {/* Hero Section */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-5xl">
                Your Trusted Partner in{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                  Financial Growth
                </span>
              </h1>
              <p className="text-lg leading-relaxed text-[#828993]">
                Key2Loan was established in 2024 with the goal of bridging the
                gap between lenders and borrowers. Our foundation is based on
                facilitating the financial needs of businesses and individuals
                by offering low-interest rates and a hassle-free process.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                className="group h-12 bg-emerald-600 px-6 hover:bg-emerald-700 text-white rounded-md flex items-center justify-center"
                onClick={scrollToLoanType}
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="h-12 px-6 border-[1.5px] border-gray-200 text-[#828993] rounded-md hover:bg-gray-50">
                Contact Us
              </button>
            </div>
          </div>
          <div className="relative lg:mt-0">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl"></div>
            <img
              src="/businesspic.png"
              alt="Team at work"
              className="relative rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="overflow-hidden border-0 bg-white/50 backdrop-blur-sm rounded-lg shadow"
            >
              <div className="p-6">
                <div className="text-3xl font-bold text-emerald-600">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="space-y-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl -mt-10">
              Our Core Values
            </h2>
            <p className="mt-4 text-lg text-[#828993]">
              The principles that guide us in providing exceptional financial
              services
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="group relative overflow-hidden border-0 bg-white/50 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-xl rounded-lg"
              >
                <div className="p-6">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[#585859]">
                    {value.title}
                  </h3>
                  <p className="text-[#828993]">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl -mt-10">
              Our Journey
            </h2>
            <p className="mt-4 text-lg text-[#828993]">
              The milestones that shaped our growth
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-emerald-200"></div>
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex gap-8 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 space-y-2">
                    <div className="text-sm font-semibold text-emerald-600">
                      {item.year}
                    </div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-[#828993]">{item.description}</p>
                  </div>
                  <div className="relative flex items-center">
                    <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-emerald-200"></div>
                    <div className="relative h-4 w-4 rounded-full border-2 border-emerald-600 bg-white"></div>
                  </div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="relative rounded-3xl bg-gradient-to-r from-emerald-600 to-green-600 px-6 py-12 sm:px-12 sm:py-14">
          <div className="relative z-10 mx-auto max-w-2xl text-center text-white">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Start Your Financial Journey?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-emerald-100">
              Discover flexible loan options tailored to your needs. Our expert
              team is here to guide you through the process, ensuring a seamless
              experience.
            </p>
            <div className="mt-10 flex justify-center gap-6">
              <button className="h-12 rounded-full px-8 bg-white text-emerald-600 hover:bg-gray-100 transition-colors">
                Get Started
              </button>
              <button
                className="h-12 rounded-full px-8 border border-white text-white hover:bg-white hover:text-emerald-600 transition-colors"
                onClick={scrollToLoanType}
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="absolute right-0 top-0 -translate-y-12 translate-x-12">
            <div className="h-64 w-64 rounded-full bg-white/20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
