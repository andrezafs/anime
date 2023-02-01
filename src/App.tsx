import { Home } from "./pages/Home";
import { AnimeDetails } from "./pages/AnimeDetails";

import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="anime" element={<AnimeDetails />} />
    </Routes>
  );
}

export default App;
