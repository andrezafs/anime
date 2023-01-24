import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { makeGlobalStyles } from "./styles";

makeGlobalStyles();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
