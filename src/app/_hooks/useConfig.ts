import { useDispatch, useSelector } from "react-redux";
import { selectConfig } from "@redux/selectors/configSelector";
import { ConfigState } from "@models/common";
import { changeLocale, changePalette, changeToRtl } from "@redux/slices/configSlice";
import { useTranslation } from "react-i18next";

export const useConfig = () => {
  const appConfig = useSelector(selectConfig);
  const dispatch = useDispatch();
  const {i18n} = useTranslation();

  return [
    appConfig,
    (config: Partial<ConfigState>) => {
      const {locale, rtl, paletteMode} = config;
      if (locale) {
        dispatch(changeLocale(locale));
        i18n.changeLanguage(locale);
      }
      if (rtl) {
        dispatch(changeToRtl(rtl));
      }
      if (paletteMode) {
        dispatch(changePalette(paletteMode));
      }
    }
  ] as [ConfigState, (config: Partial<ConfigState>) => void]
}
