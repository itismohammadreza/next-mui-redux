import { Middleware } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "@redux/store/rootReducer";
import { RootState } from "@models/dataModel";

const middlewares: Middleware<RootState>[] = [];
export const rootStore = configureStore<RootState, any, any>({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares)
});

export const getState: () => RootState = rootStore.getState;

export const dispatch = rootStore.dispatch;
