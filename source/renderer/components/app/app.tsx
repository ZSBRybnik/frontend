import type { FunctionComponent } from "react";
import AppWrapper from "~frontend/source/renderer/components/AppWrapper/AppWrapper";
import AppProvider from "~frontend/source/renderer/components/providers/app-provider/app-provider";

const App: FunctionComponent = (): JSX.Element => {
  return (
    <AppProvider>
      <AppWrapper />
    </AppProvider>
  );
};

export default App;
