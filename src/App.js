import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes & Route
import "./App.css";
import ComparePage from "./ComparePage";
import PageRoute from "./PageRoute"; // Ensure you import PageRoute

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageRoute />} />
        <Route path="/compare" element={<ComparePage />} /> {/* Fixed typo */}
      </Routes>
    </>
  );
};

export default App;
