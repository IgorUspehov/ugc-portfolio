import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from './locales/en/common.json';
import deCommon from './locales/de/common.json';
import ruCommon from './locales/ru/common.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: enCommon },
      de: { common: deCommon },
      ru: { common: ruCommon },
    },
    defaultNS: 'common',
    fallbackLng: 'en',
    supportedLngs: ['en', 'de', 'ru'],
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'i18n_lang',
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
