import { useTranslation } from 'react-i18next';
import { AppConfig } from '@root/config';
import { Locale } from "@models/theme";

export const useLocales = () => {
  const {i18n, t} = useTranslation();

  const storageLocale: Locale = typeof window !== 'undefined' ? localStorage.getItem(AppConfig.langStorageKey) : undefined;

  const currentLocale: Locale = storageLocale || AppConfig.locale;

  const changeLocale = (locale: Locale) => {
    i18n.changeLanguage(locale);
  };

  return {
    t,
    changeLocale,
    currentLocale,
  };
}
