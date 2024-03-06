// LanguageSwitcher.js

import React from "react";
import "./language-switcher.css";

type lang = "ar" | "en";

interface LanguageSwitcher {
  selectedLanguage: string;
  onChangeLanguage: (e: lang) => void;
}

const LanguageSwitcher = ({
  selectedLanguage,
  onChangeLanguage,
}: LanguageSwitcher) => {
  return (
    <div className="language-switcher shadow-cos">
      <button
        className={selectedLanguage === "en" ? "active" : ""}
        onClick={() => onChangeLanguage("en")}
      >
        Eng
      </button>
      <button
        className={selectedLanguage === "ar" ? "active" : ""}
        onClick={() => onChangeLanguage("ar")}
      >
        عربي
      </button>
    </div>
  );
};

export default LanguageSwitcher;
