import { ConfigState } from "@models/common";

export const globalConfig: Readonly<ConfigState> = {
  paletteMode: "light",
  rtl: false,
  locale: "enUS",
  langStorageKey: "lng",
  apiUrl: process.env.apiUrl!,
  requestTimeout: 15000,
}
