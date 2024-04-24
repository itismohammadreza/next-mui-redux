import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState, User } from "@models/dataModel";
import { Direction, PaletteMode } from "@mui/material";
import { GlobalConfig } from "config";

const appSlice = createSlice({
  name: "app",
  initialState: {
    paletteMode: GlobalConfig.paletteMode,
    lang: GlobalConfig.lang,
    direction: GlobalConfig.direction,
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
