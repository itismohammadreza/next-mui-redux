import { useTranslation } from 'react-i18next';
import { allLocales, AppConfig } from '../config';

export const useLocales = () => {
  const {i18n, t} = useTranslation();

  const langStorage = typeof window !== 'undefined' ? localStorage.getItem('i18nextLng') : '';

  const currentLang = allLocales.find((_lang) => _lang.value === langStorage) || AppConfig.lang;

  const handleChangeLanguage = (newlang: string) => {
    i18n.changeLanguage(newlang);
  };

  return {
    handleChangeLanguage,
    t,
    currentLang,
    allLanguages: allLocales,
  };
}
