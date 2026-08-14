import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import Features from "../components/sections/Features";
import Showcase from "../components/sections/Showcase";
import Testimonials from "../components/sections/Testimonials";
import Footer from "../components/layout/Footer";
import DesignTools from "../components/sections/DesignTools";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden">
      <Navbar />
      <Hero onGetStarted={() => navigate("/login")} />
      <Features />
      <DesignTools />
      <Showcase />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Landing;
