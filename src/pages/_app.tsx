import type { AppProps } from "next/app";
import { StoreProvider } from "@redux/StoreProvider";
import { ThemeProvider } from "@theme/theme";
import '@locales/i18n';
import { Loading } from "@components/Loading";

const App = ({Component, pageProps}: AppProps) => {
  return (
      <StoreProvider>
        <ThemeProvider>
          <Component {...pageProps} />
          <Loading/>
        </ThemeProvider>
      </StoreProvider>
  )
}

export default App;
