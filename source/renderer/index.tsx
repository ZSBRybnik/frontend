import type { Root } from "react-dom/client";
import { createRoot } from "react-dom/client";
import App from "~renderer/components/App/App";
import target, { TargetType } from "~shared/constants/target/target";
import ExtendedWindow from "~shared/types/extendedWindow/extendedWindow";

if (
  target === TargetType.Desktop
    ? (window as ExtendedWindow).api?.isElectron()
    : true
) {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const rootElement: HTMLDivElement = document.querySelector("#root")!;
  const root: Root = createRoot(rootElement);
  root.render(<App />);
}
