import { Header } from "./components/Header";
import { Shop } from "./pages/Shop";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import { Cosmetik } from "./pages/Cosmetik";
import { CosmetikCategory } from "./pages/CosmetikCategory";

function App() {
  return (
    <>
      <Header />
      <Routes basename="/ProjectGame">
        <Route path="/" element={<Home />} />
        <Route path="/cosmetik" element={<Cosmetik />} />
        <Route path="/cosmetik/:id" element={<CosmetikCategory />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
