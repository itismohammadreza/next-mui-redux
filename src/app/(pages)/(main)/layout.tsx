import { Navbar } from "@components/Navbar";
import { WithChildren } from "@models/common";

const MainLayout = ({children}: WithChildren) =>{
  return (
      <Navbar>
        {children}
      </Navbar>
  );
}

export default MainLayout;
