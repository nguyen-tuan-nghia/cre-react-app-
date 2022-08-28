import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Layout = React.lazy(() => import("./pages/Layout"));
const Home = React.lazy(() => import("./pages/Home/Home"));
const Contact = React.lazy(() => import("./pages/Home/Contact"));
const NoPage = React.lazy(() => import("./pages/Home/NoPage"));

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Layout />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <NoPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
