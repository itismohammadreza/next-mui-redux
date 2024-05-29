import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@models/dataModel";

const userSlice = createSlice({
  name: "user",
  initialState: {} as User,
  reducers: {
    updateUser: (state: User, action: PayloadAction<User>) => {
      state = {...state, ...action.payload};
      return state;
    },
  },
});

export const {updateUser} = userSlice.actions;
export const userReducer = userSlice.reducer;
