import NavBar from "@/components/navs/NavBar";
import AboutUs from "@/components/about-us";
import ContactUs from "@/components/contact-us";
import Donate from "@/components/donate";
import HeroSection from "@/components/hero-section";
import React from "react";

export default function page() {
  return (
    <main className="container flex flex-col my-4 mx-0 p-0">
      <NavBar />
      <HeroSection />
      <AboutUs />
      <Donate />
      <ContactUs />
    </main>
  );
}
