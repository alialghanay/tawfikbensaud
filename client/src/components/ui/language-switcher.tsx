"use client";

import { lan } from "lan-interfaces";
import "./language-switcher.css";

interface LanguageSwitcher {
  selectedLanguage: string;
  onChangeLanguage: (e: lan) => void;
}
const LanguageSwitcher = ({
  selectedLanguage,
  onChangeLanguage,
}: LanguageSwitcher) => {
  return (
    <div className="language-switcher shadow-cos">
      <button
        className={`but-lan ${selectedLanguage === "en-US" ? "active" : ""}`}
        onClick={() => onChangeLanguage("en-US")}
      >
        Eng
      </button>
      <button
        className={`but-lan ${selectedLanguage === "ar" ? "active" : ""}`}
        onClick={() => onChangeLanguage("ar")}
      >
        عربي
      </button>
    </div>
  );
};

export default LanguageSwitcher;
