import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import Router from "./Router";
import reportWebVitals from "./reportWebVitals";
import { HelmetProvider } from "react-helmet-async";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { loadComponents } from "loadable-components";
window.snapSaveState = () =>{
  document.querySelector("#root").setAttribute("data-server-rendered", "true");
};
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <HelmetProvider>
//       <Router />
//     </HelmetProvider>
//   </React.StrictMode>
// );
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
loadComponents()
  .then(() =>
    hydrateRoot(
      rootElement,
      <HelmetProvider>
        <Router />
      </HelmetProvider>
    )
  )
  .catch(() =>
    root.render(
      <HelmetProvider>
        <Router />
      </HelmetProvider>
    )
  );
// if (rootElement.hasChildNodes()) {
//   hydrateRoot(
//     rootElement,
//       <HelmetProvider>
//         <Router />
//       </HelmetProvider>
//   );
// } else {
//   root.render(
//     <React.StrictMode>
//       <HelmetProvider>
//         <Router />
//       </HelmetProvider>
//     </React.StrictMode>
//   );
// }
reportWebVitals();
