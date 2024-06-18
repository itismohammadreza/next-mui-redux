import { combineReducers, ReducersMapObject } from 'redux';
import { userReducer } from "@redux/slices/userSlice";
import { RootState } from "@models/common";
import { appReducer } from "@redux/slices/appSlice";
import { apiReducer } from "@services/dataService";

const reducerMap: ReducersMapObject<RootState> = {
  app: appReducer,
  user: userReducer,
  ...apiReducer
};
export const rootReducer = combineReducers(reducerMap);
