import React from "react";
import { BrowserRouter } from "react-router-dom"; // Precisa estar aqui!
import { createRoot } from "react-dom/client";
import "./styles/variables.css";
import "./index.css";
import App from "./App.tsx";
import FontScaler from "./script/ScreenScale.ts";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <FontScaler />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
