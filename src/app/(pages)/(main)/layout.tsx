import { Navbar } from "@components/Navbar";
import { ReactNode } from "react";

const MainLayout = ({children}: Readonly<{ children: ReactNode }>) =>{
  return (
      <Navbar>
        {children}
      </Navbar>
  );
}

export default MainLayout;
