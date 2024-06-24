import { Provider } from "react-redux";
import { rootStore } from "@redux/store/rootStore";
import { PropsWithChildren, useRef } from "react";

export const StoreProvider = ({children}: PropsWithChildren) => {
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
