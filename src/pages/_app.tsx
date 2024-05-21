import type { AppProps } from "next/app";
import { StoreProvider } from "@redux/StoreProvider";
import { ThemeProvider } from "@theme/theme";
import { Loading } from "@components/Loading";
import { Toast } from "@components/Toast";
import '@locales/i18n';

const App = ({Component, pageProps}: AppProps) => {
  return (
      <StoreProvider>
        <ThemeProvider>
          <Component {...pageProps} />
          <Loading/>
          <Toast/>
        </ThemeProvider>
      </StoreProvider>
  )
}

export default App;
