"use client";
import React, { useEffect, useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import navs from "@/lib/json/navs.json";

interface MenuOverlayProps {
  onClick: () => void;
}
const MenuOverlay = ({ onClick }: MenuOverlayProps) => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    navs.forEach((nav) => {
      const element = document.getElementById(nav.path);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col py-4 h-full items-center text-2xl gap-8">
      {navs.map((nav, index) => (
        <ScrollLink
          key={index}
          to={nav.path}
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          className={`cursor-pointer font-bold ${
            activeSection === nav.path
              ? "text-primary border-b-4 border-primary border-solid rounded"
              : ""
          }`}
          onClick={onClick}
        >
          {nav.title}
        </ScrollLink>
      ))}
    </div>
  );
};

export default MenuOverlay;
