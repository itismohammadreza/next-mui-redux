import { combineReducers, ReducersMapObject } from 'redux';
import { userReducer } from "@redux/slices/userSlice";
import { RootState } from "@models/dataModel";
import { appReducer } from "@redux/slices/appSlice";
import { loadingReducer } from "@redux/slices/loadingSlice";

const reducerMap: ReducersMapObject<RootState> = {
  app: appReducer,
  loading: loadingReducer,
  user: userReducer,
};
export const rootReducer = combineReducers(reducerMap);
