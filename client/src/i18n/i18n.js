import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationsEN from "./en/en.json";

const resources = {
  en: {
    translation: translationsEN,
  },
};
const DETECTION_OPTIONS = {
  order: ["navigator"],
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "en",
    keySeparator: false,
    detection: DETECTION_OPTIONS,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
