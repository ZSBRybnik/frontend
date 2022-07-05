import type { Root } from "react-dom/client";
import { createRoot } from "react-dom/client";
import App from "~renderer/components/App/App";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const rootElement: HTMLDivElement = document.querySelector("#root")!;
const { render }: Root = createRoot(rootElement);
render(<App />);
