import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./css/global.css";
import "./css/components.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
