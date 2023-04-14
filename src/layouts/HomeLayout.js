import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";

const HomeLayout = () => {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 right-0">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
