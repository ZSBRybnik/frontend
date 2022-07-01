import AppProvider from "~renderer/components/AppProvider/AppProvider";
import AppWrapper from "~renderer/components/AppWrapper/AppWrapper";
import { FunctionComponent } from "react";

const App: FunctionComponent = (): JSX.Element => {
  return (
    <AppProvider>
      <AppWrapper />
    </AppProvider>
  );
};

export default App;
