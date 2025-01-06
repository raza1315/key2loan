import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    author: "Sarah Chen",
    role: "Small Business Owner",
    content:
      "The seamless experience and quick approval process made everything so easy. Their support team was incredibly helpful throughout.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    id: 2,
    author: "Marcus Rodriguez",
    role: "Tech Entrepreneur",
    content:
      "The low interest rates and transparent terms helped me expand my business without worrying about hidden fees or complicated processes.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    id: 3,
    author: "Emily Parker",
    role: "Restaurant Owner",
    content:
      "Their customer service is exceptional. They guided me through every step and made the entire funding process stress-free.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    id: 4,
    author: "David Kim",
    role: "Retail Store Owner",
    content:
      "The flexibility of their loan terms and the professional guidance made all the difference for my business growth plans.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    id: 5,
    author: "Lisa Thompson",
    role: "E-commerce Founder",
    content:
      "Their digital-first approach and quick processing saved me valuable time. The entire experience exceeded my expectations.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    id: 6,
    author: "Michael Foster",
    role: "Startup Founder",
    content:
      "The transparent process and competitive rates made this the clear choice for my business funding needs.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
  },
];

const TestimonialCarousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(testimonials.length / 3);

  const nextSlide = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const getCurrentTestimonials = () => {
    const startIndex = currentPage * 3;
    return testimonials.slice(startIndex, startIndex + 3);
  };

  const TestimonialCard = ({ testimonial }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] sm:h-56">
      <div className="relative">
        <div className="absolute -top-10 left-4">
          <div className="bg-green-500 p-3 rounded-full">
            <Quote className="w-4 h-4 text-white" />
          </div>
        </div>
        <div className="pt-4">
          <p className="text-gray-700 text-sm mb-4 italic">
            "{testimonial.content}"
          </p>
          <div className="flex items-center gap-4">
            <img
              src={testimonial.image}
              alt={testimonial.author}
              className="w-12 h-12 rounded-full object-cover border-2 border-green-100"
            />
            <div>
              <h4 className="text-base font-semibold text-green-800">
                {testimonial.author}
              </h4>
              <p className="text-sm text-green-600">{testimonial.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-[#21A26B] mb-4">
            Our Client Success Stories
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
        </div>

        <div className="overflow-hidden relative h-80 pt-12">
          <button
            onClick={prevSlide}
            className="absolute left-2 top-[50%] -translate-y-1/2 z-10 p-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentPage * 100}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-full md:w-1/3 px-2"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentPage ? "bg-green-500 w-6" : "bg-green-200"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
