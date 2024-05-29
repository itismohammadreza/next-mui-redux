'use client';

import { ThemeProvider } from "@theme/theme";
import { Loading } from "./Loading";
import { Toast } from "./Toast";
import { StoreProvider } from "@redux/StoreProvider";
import '@locales/i18n';

export function Providers({children}) {
  return (
      <StoreProvider>
        <ThemeProvider>
          <Loading/>
          <Toast/>
          {children}
        </ThemeProvider>
      </StoreProvider>
  );
}
