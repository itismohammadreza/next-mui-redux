import { WithChildren } from "@models/dataModel";
import { Provider } from "react-redux";
import { rootStore } from "@redux/store/rootStore";

export const StoreProvider = ({children}: WithChildren) => {
  return (
      <Provider store={rootStore}>
        {children}
      </Provider>
  )
}
