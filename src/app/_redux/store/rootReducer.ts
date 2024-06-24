import { combineReducers, ReducersMapObject } from 'redux';
import { userReducer } from "@redux/slices/userSlice";
import { RootState } from "@models/common";
import { configReducer } from "@redux/slices/configSlice";
import { apiReducer } from "@services/dataService";

const reducerMap: ReducersMapObject<RootState> = {
  config: configReducer,
  user: userReducer,
  ...apiReducer
};
export const rootReducer = combineReducers(reducerMap);
