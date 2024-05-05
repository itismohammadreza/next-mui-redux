import { ReactNode } from "react";
import { Direction, PaletteMode } from "@mui/material";
import { Localization } from "@mui/material/locale";

export type SafeAny = any;

export interface Locale {
  label: string;
  value: string;
  systemValue: Localization;
}

export interface AppState {
  paletteMode: PaletteMode;
  direction: Direction;
  lang: Locale;
}

export type UserState = User;

export interface User {
}

export interface RootState {
  user: UserState;
  app: AppState;
}

export type WithChildren<T = any> = { children: ReactNode; } & T;
