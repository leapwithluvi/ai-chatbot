import React from "react";
// components/overview/...
import Navbar from "@/components/Navbar";
import Hero from "@/components/overview/Hero";
import About from "@/components/overview/About";
import Contact from "@/components/overview/Contact";

// Start
const Overview = () => {
  return (
    <div className="bg-gray-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Contact />
    </div>
  );
};

export default Overview;
