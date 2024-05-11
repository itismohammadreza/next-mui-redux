import { Html, Head, Main, NextScript } from "next/document";
import { getState } from "@redux/store/rootStore";

const Document = () => {
  return (
      <Html lang={getState().app.locale} dir={getState().app.direction}>
        <Head/>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
  );
}

export default Document;
