import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import enLocales from './en/common';
import faLocales from './fa/common';
import { AppConfig } from "@root/config";

let lng = AppConfig.lang.value;

if (typeof window !== 'undefined') {
  lng = localStorage.getItem('i18nextLng') || AppConfig.lang.value;
}

i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
  resources: {
    en: {translations: enLocales},
    fa: {translations: faLocales},
  },
  lng,
  fallbackLng: AppConfig.lang.value,
  debug: false,
  ns: ['translations'],
  defaultNS: 'translations',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
