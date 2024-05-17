import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Player from "./Pages/Player";
import Header from "./Components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/player" element={<Player />} />
      </Routes>
    </BrowserRouter>
  );
}
