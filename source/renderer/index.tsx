import { createRoot } from "react-dom/client";
import App from "~renderer/components/App/App";

const rootElement: HTMLDivElement = document.querySelector("#root")!;

const root = createRoot(rootElement);
root.render(<App />);
