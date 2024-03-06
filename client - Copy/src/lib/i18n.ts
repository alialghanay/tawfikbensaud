// client/src/lib/i18n.ts

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import your translations for English and Arabic
import translationEN from "./translations/en.json";
import translationAR from "./translations/ar.json";

const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAR,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "ar", // Default language is Arabic
    detection: {
      order: ["navigator"], // Use the browser's language detection
    },
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;
