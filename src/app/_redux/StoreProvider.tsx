import { WithChildren } from "@models/common";
import { Provider } from "react-redux";
import { rootStore } from "@redux/store/rootStore";
import { useRef } from "react";

export const StoreProvider = ({children}: WithChildren) => {
  const storeRef = useRef<typeof rootStore>();

  if (!storeRef.current) {
    storeRef.current = rootStore
  }

  return (
      <Provider store={storeRef.current}>
        {children}
      </Provider>
  )
}
