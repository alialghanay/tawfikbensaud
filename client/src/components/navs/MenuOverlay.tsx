"use client";
import React, { useEffect, useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import navs from "@/lib/json/navs.json";
import i18n from "@/lib/i18n";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaSquareFacebook } from "react-icons/fa6";

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

    navs[i18n.language as keyof typeof navs].forEach((nav) => {
      const element = document.getElementById(nav.path);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [i18n.language, navs]);

  return (
    <div className="flex flex-col py-12 h-screen items-center text-2xl gap-12">
      {navs[i18n.language as keyof typeof navs].map((nav, index) => (
        <ScrollLink
          key={index}
          to={nav.path}
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          className={`cursor-pointer font-bold font-cairo ${
            activeSection === nav.path
              ? "text-primary border-b-4 border-primary border-solid rounded"
              : ""
          }`}
          onClick={onClick}
        >
          <p>{nav.title}</p>
        </ScrollLink>
      ))}
      <div className="flex items-center text-zinc-500">
        <Link
          href={"https://www.facebook.com/iamTawfikOfficial"}
          target="_blank"
          className="cursor-pointer"
        >
          <FaLinkedin className="size-6" />
        </Link>
        <Link
          href={"https://www.facebook.com/iamTawfikOfficial"}
          target="_blank"
          className="cursor-pointer"
        >
          <FaSquareFacebook className="size-6 ml-2" />
        </Link>
        <Link
          href={"https://www.facebook.com/iamTawfikOfficial"}
          target="_blank"
          className="cursor-pointer"
        >
          <FaInstagram className="size-6 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default MenuOverlay;
