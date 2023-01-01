import type { AppProps } from "next/app";
import Application from "~frontend/source/renderer/components/app/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Application>
      <Component {...pageProps} />
    </Application>
  );
};

export default App;
