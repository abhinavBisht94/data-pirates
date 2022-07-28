import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "./Home";
import TimerPage from "./TimerPage";

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timer" element={<TimerPage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
