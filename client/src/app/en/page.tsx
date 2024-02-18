import NavBar from "@/components/NavBar";
import AboutUs from "@/components/about-us";
import HeroSection from "@/components/hero-section";
import React from "react";

export default function page() {
  return (
    <div className="container flex flex-col justify-start items-center mx-8 my-4">
      <NavBar />
      <HeroSection />
      <AboutUs />
    </div>
  );
}
