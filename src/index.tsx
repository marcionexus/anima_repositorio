import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ElementDashboard } from "./screens/ElementDashboard/ElementDashboard";
import "./index.css";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ElementDashboard />
  </StrictMode>,
);
