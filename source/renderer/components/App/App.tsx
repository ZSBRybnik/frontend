import type { FunctionComponent } from "react";
import AppProvider from "~renderer/components/AppProvider/AppProvider";
import AppWrapper from "~renderer/components/AppWrapper/AppWrapper";

const App: FunctionComponent = (): JSX.Element => {
  return (
    <AppProvider>
      <AppWrapper />
    </AppProvider>
  );
};

export default App;
