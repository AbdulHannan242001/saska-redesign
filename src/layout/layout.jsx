import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import RevealFooter from "../components/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <RevealFooter />
    </div>
  );
};

export default Layout;
