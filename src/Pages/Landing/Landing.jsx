import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Loantypesection from "./components/Loantypesection";
import About from "./components/About";
import WhyKey2Loan from "./components/WhyKey2Loan";
import ChannelPartners from "./components/ChannelPartners";
import TestimonialCarousel from "./components/TestimonialCarousel";
import FAQ from "./components/FAQs";
import { useRef } from "react";
export default function Landing() {
  const aboutRef = useRef(null);
  const loanTypeRef = useRef(null);
  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToLoanType = () => {
    loanTypeRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar scrollToAbout={scrollToAbout}/>

      {/* Hero Section */}
      <HeroSection  scrollToLoanType={scrollToLoanType} />

      {/* Types of Loan */}
      <Loantypesection loanTypeRef={loanTypeRef} />

      {/* About Section */}
      <About aboutRef={aboutRef}  scrollToLoanType={scrollToLoanType}/>

      {/* why key2loan */}
      <WhyKey2Loan  scrollToLoanType={scrollToLoanType}/>

      {/* FAQs */}
      <FAQ />

      {/* Channel Partners */}
      <ChannelPartners />

      {/* Testimonials */}
      <TestimonialCarousel />
    </div>
  );
}
