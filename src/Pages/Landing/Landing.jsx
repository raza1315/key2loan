import { useState } from "react";
// #8C939C font color
import Contactbar from "./components/Contactbar";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Loantypesection from "./components/Loantypesection";
import { About } from "./components/About";
import { WhyKey2Loan } from "./components/WhyKey2Loan";
export default function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      
    </div>
  );
}
