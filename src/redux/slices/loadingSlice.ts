import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: {value: false},
  reducers: {
    toggleLoading: (state: { value: boolean }, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const {toggleLoading} = loadingSlice.actions;
export const loadingReducer = loadingSlice.reducer;
