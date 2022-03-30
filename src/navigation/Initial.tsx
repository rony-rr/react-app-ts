import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const StackInit = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={null} />
      </Routes>
    </Router>
  );
};

export default StackInit;
