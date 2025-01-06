import { useState } from "react";
// #8C939C font color
import Contactbar from "./components/Contactbar";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Loantypesection from "./components/Loantypesection";
import About from "./components/About";
import WhyKey2Loan from "./components/WhyKey2Loan";
import ChannelPartners from "./components/ChannelPartners";
import TestimonialCarousel from "./components/TestimonialCarousel";
import FAQs from "./components/FAQs";
export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Contact Bar */}
      <Contactbar />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <About />

      {/* Types of Loan */}
      <Loantypesection />

      {/* why key2loan */}
      <WhyKey2Loan />

      {/* Channel Partners */}
      <ChannelPartners />

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* FAQs */}
      {/* <FAQs /> */}
    </div>
  );
}
