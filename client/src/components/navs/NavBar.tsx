"use client";
import React, { useState, useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import LanguageSwitcher from "../bb-ui/language-switcher";
import { MdMenu } from "react-icons/md";
import { HiOutlineXMark } from "react-icons/hi2";
import navs from "@/lib/json/navs.json";
import MenuOverlay from "./MenuOverlay";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("ar");
  const [activeSection, setActiveSection] = useState("home");
  const [navbarOpen, setNavbarOpen] = useState(false);

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
    <nav className="w-screen fixed top-0 left-0 bg-primary-foreground z-40">
      <div className="container relative flex flex-col m-0 p-0">
        <div className="container flex items-center m-0 p-0">
          <div className="w-1/4 ml-2">
            <LanguageSwitcher
              selectedLanguage={selectedLanguage}
              onChangeLanguage={(e) => {
                t(e);
                setSelectedLanguage(e);
              }}
            />
          </div>
          <div className="w-3/4 mobile-menu block md:hidden mr-2">
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
          <div className="menu hidden md:block">
            <div className="flex justify-center items-center gap-20 text-xl">
              {navs.map((nav, index) => (
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
                  {nav.title}
                </ScrollLink>
              ))}
            </div>
          </div>
        </div>
        {navbarOpen ? (
          <MenuOverlay onClick={() => setNavbarOpen(false)} />
        ) : null}
      </div>
    </nav>
  );
};

export default NavBar;
