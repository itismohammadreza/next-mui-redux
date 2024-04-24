import { ReactNode } from "react";
import { Direction, PaletteMode } from "@mui/material";

export type Language = 'fa' | 'en';

export interface GlobalConfig {
  paletteMode: PaletteMode;
  direction: Direction;
  lang: Language;
}

export interface AppState {
  paletteMode: PaletteMode;
  direction: Direction;
  lang: Language;
}

export type UserState = User;

export interface User {

}

export interface RootState {
  user: UserState;
  app: AppState;
}

export interface ChildrenOnly {
  children: ReactNode;
}
