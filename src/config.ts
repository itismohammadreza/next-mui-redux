import { AppState } from "@models/dataModel";

export const AppConfig: Readonly<AppState> = {
  paletteMode: "light",
  direction: "ltr",
  locale: "enUS",
  langStorageKey: "lng",
  apiUrl: process.env.apiUrl!
}
