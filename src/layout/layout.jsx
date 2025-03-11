import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import RevealFooter from "../components/Footer";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.lenis?.scrollTo(0, { immediate: true });
  }, [location.pathname]);

  return (
    <div>
      <div className="sticky top-0 z-[999]">
        <Navbar />
      </div>
        <Outlet />
      <RevealFooter />
    </div>
  );
};

export default Layout;
