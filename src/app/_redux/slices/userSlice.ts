import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@models/business";

const userSlice = createSlice({
  name: "user",
  initialState: null as User,
  reducers: {
    updateUser: (state: User, action: PayloadAction<User>) => {
      state = {...state, ...action.payload};
      return state;
    },
  },
});

export const {updateUser} = userSlice.actions;
export const userReducer = userSlice.reducer;
