import { ReactNode } from "react";
import { ChildrenOnly } from "@models/dataModel";

const RootLayout = ({children}: ChildrenOnly) => (
    <>
      <main>
        <aside>Sidebar</aside>
        <div>{children}</div>
      </main>
    </>
);

export default RootLayout;
