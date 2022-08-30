import type { FunctionComponent } from "react";
import AppProvider from "~frontend/source/renderer/components/AppProvider/AppProvider";
import AppWrapper from "~frontend/source/renderer/components/AppWrapper/AppWrapper";

const App: FunctionComponent = (): JSX.Element => {
  return (
    <AppProvider>
      <AppWrapper />
    </AppProvider>
  );
};

export default App;
