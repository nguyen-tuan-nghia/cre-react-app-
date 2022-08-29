import { BrowserRouter, Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";
const Layout = loadable(() => import("./pages/Layout"));
const Home = loadable(() => import("./pages/Home/Home"));
const Contact = loadable(() => import("./pages/Home/Contact"));
const NotFoundPage = loadable(() => import("./pages/Home/NoPage"), {
  modules: ["NotFoundPage"],
});

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
