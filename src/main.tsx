import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { makeGlobalStyles } from "./styles";
import { BrowserRouter } from "react-router-dom";

makeGlobalStyles();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
