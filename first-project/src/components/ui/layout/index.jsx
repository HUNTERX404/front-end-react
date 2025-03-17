import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <Navbar />
      <main className="w-9/12 mx-auto mt-4">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
