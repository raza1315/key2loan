import { useState } from "react";
// #8C939C font color
import Contactbar from "./components/Contactbar";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
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
    </div>
  );
}
