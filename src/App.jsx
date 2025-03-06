import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
      </Route>
    </Routes>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
