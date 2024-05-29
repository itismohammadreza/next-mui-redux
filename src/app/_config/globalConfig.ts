import { AppState } from "@models/dataModel";

export const globalConfig: Readonly<AppState> = {
  paletteMode: "light",
  direction: "ltr",
  locale: "enUS",
  langStorageKey: "lng",
  apiUrl: process.env.apiUrl!,
  requestTimeout: 15000,
}
