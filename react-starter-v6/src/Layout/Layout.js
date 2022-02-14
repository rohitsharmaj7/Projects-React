import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export default function Layout(props) {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
