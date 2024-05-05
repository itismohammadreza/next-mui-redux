import { combineReducers, ReducersMapObject } from 'redux';
import { userReducer } from "@redux/slices/userSlice";
import { RootState } from "@models/dataModel";
import { appReducer } from "@redux/slices/appSlice";

const reducerMap: ReducersMapObject<RootState> = {
  app: appReducer,
  user: userReducer,
};
export const rootReducer = combineReducers(reducerMap);
