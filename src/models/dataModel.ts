import { ReactNode } from "react";
import { Direction, PaletteMode } from "@mui/material";
import { Locale } from "@models/theme";

export type SafeAny = any;

export interface AppState {
  paletteMode: PaletteMode;
  direction: Direction;
  locale: Locale;
  langStorageKey: string;
  apiUrl: string;
  requestTimeout: number;
}

export type UserState = User;

export interface User {
}

export interface RootState {
  user: UserState;
  app: AppState;
}

export type WithChildren<T = any> = { children: ReactNode; } & T;
