import { Providers } from "@components/Providers";
import { ReactNode } from "react";

const RootLayout = ({children}: Readonly<{ children: ReactNode }>) => {
  return (
      <html>
        <body>
          <Providers>
            {children}
          </Providers>
        </body>
      </html>
  );
}

export default RootLayout;
