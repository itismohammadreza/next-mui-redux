import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import enLocales from './en/common';
import faLocales from './fa/common';
import { AppConfig } from "@root/config";
import { Locale } from "@models/theme";

let lng: Locale = AppConfig.locale;

if (typeof window !== 'undefined') {
  lng = localStorage.getItem(AppConfig.langStorageKey) as Locale || AppConfig.locale;
}

const resources: Partial<Record<Locale, { translation: any }>> = {
  'enUS': {translation: enLocales},
  'faIR': {translation: faLocales},
}

i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
  resources,
  lng,
  fallbackLng: AppConfig.locale,
  detection: {
    lookupLocalStorage: AppConfig.langStorageKey,
    lookupSessionStorage: AppConfig.langStorageKey
  },
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
