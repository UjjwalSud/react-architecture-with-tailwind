// src/index.tsx
import { StrictMode } from "react";
import "./index.css"; // Add this line
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
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// reportWebVitals();
