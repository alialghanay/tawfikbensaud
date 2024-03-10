import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import your translations for English and Arabic
import translationEN from "./translations/en.json";
import translationAR from "./translations/ar.json";

const resources = {
  "en-US": {
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
    fallbackLng: "ar",
    detection: {
      order: ["navigator"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
