import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
// import StoryView from "../components/StoryView";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/StoryView" element={<StoryView />} /> */}
    </Routes>
  );
}