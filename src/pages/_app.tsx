import type { AppProps } from "next/app";
import { StoreProvider } from "@redux/StoreProvider";
import { ThemeProvider } from "@theme/theme";
import '@locales/i18n';

export default function App({Component, pageProps}: AppProps) {
  return (
      <StoreProvider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </StoreProvider>
  )
}
