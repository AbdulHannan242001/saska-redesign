import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Lenis from '@studio-freight/lenis';
import Layout from "./layout/layout";
import Home from "./pages/Home/Home";
import Service from "./pages/Service/Service";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
  // Initialize Lenis with useEffect
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Animation duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(1 - t, 2)), // Easing function
      direction: 'vertical', // vertical or horizontal
      gestureDirection: 'vertical', // for touch devices
      smooth: true, // enable smooth scrolling
      smoothTouch: false, // enable smooth scrolling for touch devices (optional)
      touchMultiplier: 2, // sensitivity for touch
      infinite: false, // infinite scrolling
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Portfolio />} />
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