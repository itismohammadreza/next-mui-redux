import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@models/common";
import { selectSelf } from "@redux/selectors/selfStateSelector";

export const selectUser = createSelector(selectSelf, (state: RootState) => state.user);
