import { useTranslation } from 'react-i18next';
import { Locale } from "@models/theme";
import { changeLocale as changeLocaleAction } from "@redux/slices/appSlice";
import { useDispatch } from "react-redux";
import { useApp } from "@hooks/useApp";
import { Nullable } from "@models/common";

export const useLocales = () => {
  const {i18n, t} = useTranslation();
  const dispatch = useDispatch();
  const {locale, langStorageKey} = useApp();

  const storageLocale: Nullable<Locale> = typeof window !== 'undefined' ? localStorage.getItem(langStorageKey) as Locale : undefined;

  const currentLocale: Locale = storageLocale || locale;

  const changeLocale = (locale: Locale) => {
    dispatch(changeLocaleAction(locale));
    i18n.changeLanguage(locale);
  };

  return {
    t,
    changeLocale,
    currentLocale,
  };
}
