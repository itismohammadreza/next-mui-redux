import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ConfigState } from "@models/common";
import { PaletteMode } from "@mui/material";
import { globalConfig } from "@config/globalConfig";
import { Locale } from "@models/theme";

const configSlice = createSlice({
  name: "config",
  initialState: globalConfig,
  reducers: {
    changePalette: (state: ConfigState, action: PayloadAction<PaletteMode>) => {
      state.paletteMode = action.payload;
    },
    changeToRtl: (state: ConfigState, action: PayloadAction<boolean>) => {
      state.rtl = action.payload;
    },
    changeLocale: (state: ConfigState, action: PayloadAction<Locale>) => {
      state.locale = action.payload;
    },
  },
});

export const {changePalette, changeToRtl, changeLocale} = configSlice.actions;
export const configReducer = configSlice.reducer;
