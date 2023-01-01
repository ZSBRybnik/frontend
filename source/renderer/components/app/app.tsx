import type { FunctionComponent, PropsWithChildren } from "react";
import AppWrapper from "../AppWrapper/AppWrapper";
import AppProvider from "../providers/app-provider/app-provider";

const App: FunctionComponent<PropsWithChildren> = ({
  children,
}: PropsWithChildren): JSX.Element => {
  return (
    <AppProvider>
      <AppWrapper>{children}</AppWrapper>
    </AppProvider>
  );
};

export default App;
