import React from "react";
import { Routes, Route } from "react-router-dom";
import Results from "./Results";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/search" element={<Results />} />
        <Route path="/news" element={<Results />} />
        <Route path="/images" element={<Results />} />
        <Route path="/videos" element={<Results />} />
      </Routes>
    </div>
  );
}

export default Routing;
