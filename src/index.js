import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import reportWebVitals from "./reportWebVitals";
import { HelmetProvider } from "react-helmet-async";
import "bootstrap/dist/css/bootstrap.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Router />
    </HelmetProvider>
  </React.StrictMode>
);
reportWebVitals();
