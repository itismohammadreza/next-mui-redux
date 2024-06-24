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
      if ('locale' in config) {
        dispatch(changeLocale(config.locale!));
        i18n.changeLanguage(config.locale);
      }
      if ('rtl' in config) {
        dispatch(changeToRtl(config.rtl!));
      }
      if ('paletteMode' in config) {
        dispatch(changePalette(config.paletteMode!));
      }
    }
  ] as [ConfigState, (config: Partial<ConfigState>) => void]
}
