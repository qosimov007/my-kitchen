import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

function MainLayout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="relative">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
