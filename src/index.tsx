// src/index.tsx
import { StrictMode } from "react";
import "./styles/index.css";

import App from "./App";

import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
