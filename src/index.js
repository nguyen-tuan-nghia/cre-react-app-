import React from "react";
import ReactDOM , {hydrateRoot } from "react-dom/client";
import Router from "./Router";
import reportWebVitals from "./reportWebVitals";
import { HelmetProvider } from "react-helmet-async";
import 'bootstrap/dist/css/bootstrap.css';

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <HelmetProvider>
//       <Router />
//     </HelmetProvider>
//   </React.StrictMode>
// );
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
if (rootElement.hasChildNodes()) {
  hydrateRoot(
    <React.StrictMode>
      <HelmetProvider>
        <Router />
      </HelmetProvider>
    </React.StrictMode>,
    rootElement
  );
} else {
  root.render(
    <React.StrictMode>
      <HelmetProvider>
        <Router />
      </HelmetProvider>
    </React.StrictMode>,
  );
}
reportWebVitals();
