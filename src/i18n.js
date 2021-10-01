import i18n from "i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";

i18n
  // load translation using http -> see /public/locales
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'en',
    ns: ['ui'/*, 'validation', 'common', 'glossary'*/],
    defaultNS: 'ui',
    preload: ['en', 'pl'],
    debug: true,

    interpolation: {
      escapeValue: false // react already safes from xss
    },
  });

  export default i18n;