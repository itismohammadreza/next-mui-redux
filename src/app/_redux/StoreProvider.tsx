"use client"
import { ChildrenOnly } from "@models/dataModel";
import { Provider } from "react-redux";
import { rootStore } from "@redux/store/rootStore";

export const StoreProvider = ({children}: ChildrenOnly) => {
  return (
      <Provider store={rootStore}>
        {children}
      </Provider>
  )
}
