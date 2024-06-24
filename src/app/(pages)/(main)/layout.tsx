import { Navbar } from "@components/Navbar";
import { PropsWithChildren } from "react";

const MainLayout = ({children}: PropsWithChildren) =>{
  return (
      <Navbar>
        {children}
      </Navbar>
  );
}

export default MainLayout;
