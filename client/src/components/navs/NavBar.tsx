"use client";

import React, { useState, useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import LanguageSwitcher from "./language-switcher";
import { MdMenu } from "react-icons/md";
import { HiOutlineXMark } from "react-icons/hi2";
import navs from "@/lib/json/navs.json";
import MenuOverlay from "./MenuOverlay";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaLinkedin, FaSquareFacebook } from "react-icons/fa6";
import Link from "next/link";

const NavBar = () => {
  const { i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState("home");
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [language, setLanguage] = useState(i18n.language);

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

    navs[language.startsWith("en") ? "en" : "ar"].forEach(
      (nav: { title: string; path: string }) => {
        const element = document.getElementById(nav.path);
        if (element) {
          observer.observe(element);
        }
      }
    );

    return () => {
      observer.disconnect();
    };
  }, [i18n.language]);

  return (
    <nav className="w-full fixed top-0 left-0 bg-primary-foreground z-40">
      <div className="w-full relative flex flex-col m-0 p-0">
        <div className="w-full flex justify-between items-center m-0 p-0">
          <div className="ml-2">
            <LanguageSwitcher
              selectedLanguage={language}
              onChangeLanguage={(lan) => {
                i18n.changeLanguage(lan);
                setLanguage(lan);
              }}
            />
          </div>
          <div className="mobile-menu block md:hidden mr-2">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex justify-end items-center"
              >
                <MdMenu className="size-10 fill-primary" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex justify-end items-center"
              >
                <HiOutlineXMark className="size-10 fill-primary" />
              </button>
            )}
          </div>
          <div className="menu hidden md:block mr-8">
            <div
              className={`flex font-cairo justify-center items-center gap-20 text-xl`}
              dir={i18n.language === "ar" ? "rtl" : "ltr"}
            >
              {navs[language.startsWith("en") ? "en" : "ar"].map(
                (nav, index) => (
                  <ScrollLink
                    key={index}
                    to={nav.path}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    className={`cursor-pointer font-medium ${
                      activeSection === nav.path
                        ? "text-primary border-b-4 border-primary border-solid rounded"
                        : ""
                    }`}
                  >
                    <p>{nav.title}</p>
                  </ScrollLink>
                )
              )}
            </div>
          </div>
          <div className="hidden md:flex items-center text-zinc-500">
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
        {navbarOpen ? (
          <MenuOverlay
            onClick={() => setNavbarOpen(false)}
            language={language}
          />
        ) : null}
      </div>
    </nav>
  );
};

export default NavBar;
