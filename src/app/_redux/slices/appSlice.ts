import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "@models/common";
import { PaletteMode } from "@mui/material";
import { globalConfig } from "@config/globalConfig";
import { Locale } from "@models/theme";

const appSlice = createSlice({
  name: "app",
  initialState: globalConfig,
  reducers: {
    changePalette: (state: AppState, action: PayloadAction<PaletteMode>) => {
      state.paletteMode = action.payload;
    },
    changeToRtl: (state: AppState, action: PayloadAction<boolean>) => {
      state.rtl = action.payload;
    },
    changeLocale: (state: AppState, action: PayloadAction<Locale>) => {
      state.locale = action.payload;
    },
  },
});

export const {changePalette, changeToRtl, changeLocale} = appSlice.actions;
export const appReducer = appSlice.reducer;
