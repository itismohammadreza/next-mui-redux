import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "@models/dataModel";
import { Direction, PaletteMode } from "@mui/material";
import { AppConfig } from "@root/config";

const appSlice = createSlice({
  name: "app",
  initialState: {
    paletteMode: AppConfig.paletteMode,
    locale: AppConfig.locale,
    direction: AppConfig.direction,
  } as AppState,
  reducers: {
    changePalette: (state: AppState, action: PayloadAction<PaletteMode>) => {
      state.paletteMode = action.payload;
    },
    changeDirection: (state: AppState, action: PayloadAction<Direction>) => {
      state.direction = action.payload;
    },
  },
});

export const {changePalette, changeDirection} = appSlice.actions;
export const appReducer = appSlice.reducer;
