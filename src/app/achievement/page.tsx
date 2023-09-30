"use client";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/page";
import Zoo from "./zoo/page";
import Sidebar from "./components/sidebar/sidebar";

function SidebarRouting() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/zoo" element={<Zoo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default SidebarRouting;
