'use client';
import { ThemeProvider } from "@theme/theme";
import { Loading } from "./Loading";
import { Toast } from "./Toast";
import { StoreProvider } from "@redux/StoreProvider";
import { WithChildren } from "@models/common";
import '@locales/i18n';

export const Providers = ({children}: WithChildren) => {
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
