import React from "react";
import { Routes, Route } from "react-router-dom";
import All from "./SelectArea/All";
import News from "./SelectArea/News";
import Images from "./SelectArea/Images";
import Videos from "./SelectArea/Videos";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/all" element={<All />} />
        <Route path="/news" element={<News />} />
        <Route path="/images" element={<Images />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </div>
  );
}

export default Routing;
