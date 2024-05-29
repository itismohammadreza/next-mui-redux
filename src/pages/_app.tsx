import type { AppProps } from "next/app";
import { ThemeProvider } from "@theme/theme";
import { Loading } from "@components/Loading";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toast } from "@components/Toast";
import '@locales/i18n';

const queryClient = new QueryClient();

const App = ({Component, pageProps}: AppProps) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          {getLayout(<Component {...pageProps} />)}
          <Loading/>
          <Toast/>
        </ThemeProvider>
      </QueryClientProvider>
  )
}

export default App;
