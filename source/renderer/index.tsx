import Gun from "gun";
import type { Root } from "react-dom/client";
import { createRoot } from "react-dom/client";
import App from "~frontend/source/renderer/components/App/App";
import target, {
  TargetType,
} from "~frontend/source/shared/constants/target/target";
import ExtendedWindow from "~frontend/source/shared/types/extendedWindow/extendedWindow";

export const gun = Gun("http://localhost:3000/gun");

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
