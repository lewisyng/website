import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enLocal from './locales/en';
import deLocal from './locales/de';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  de: {
    translation: deLocal,
  },
  en: {
    translation: enLocal,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: 'de',
  });

export default i18n;
