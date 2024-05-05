import { AppState, Locale } from "@models/dataModel";
import { enUS, faIR } from "@mui/material/locale";

export const allLocales: Locale[] = [
  {
    label: 'English',
    value: 'en',
    systemValue: enUS,
  },
  {
    label: 'Persian',
    value: 'fa',
    systemValue: faIR,
  },
];

export const AppConfig: AppState = {
  paletteMode: "light",
  direction: "ltr",
  lang: allLocales[0]
}

