"use client";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/page";
import History from "./history/page";
import Sidebar from "./components/sidebar/sidebar";

function SidebarRouting() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/history" element={<History />} />
          <Route path="/achievement" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default SidebarRouting;
