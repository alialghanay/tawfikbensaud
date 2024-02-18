"use client";
import { useState, useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import LanguageSwitcher from "./bb-ui/language-switcher";

const NavBar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "donate", "contact-us", "about-us"];

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      const activeSection = sections.find((section) => {
        const element = document.getElementById(section);
        const offsetTop = element?.offsetTop || 0;
        return scrollPosition < offsetTop;
      });

      setActiveSection(activeSection || "about-us");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 flex bg-primary-foreground z-10">
      <div className="relative w-1/4 mx-4">
        <LanguageSwitcher
          selectedLanguage={selectedLanguage}
          onChangeLanguage={(e) => setSelectedLanguage(e)}
        />
      </div>
      <div className="relative flex justify-center items-center gap-20 text-xl">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          className={`cursor-pointer font-medium ${
            activeSection === "home"
              ? "text-primary border-b-4 border-primary border-solid rounded"
              : ""
          }`}
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="donate"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          className={`cursor-pointer font-medium ${
            activeSection === "donate"
              ? "text-primary border-b-4 border-primary border-solid rounded"
              : ""
          }`}
        >
          Donate
        </ScrollLink>
        <ScrollLink
          to="contact-us"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          className={`cursor-pointer font-medium ${
            activeSection === "contact-us"
              ? " text-primary border-b-4 border-primary border-solid rounded"
              : ""
          }`}
        >
          Contact Us
        </ScrollLink>
        <ScrollLink
          to="about-us"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          className={`cursor-pointer font-medium ${
            activeSection === "about-us"
              ? " text-primary border-b-4 border-primary border-solid rounded"
              : ""
          }`}
        >
          About Us
        </ScrollLink>
      </div>
    </nav>
  );
};

export default NavBar;
