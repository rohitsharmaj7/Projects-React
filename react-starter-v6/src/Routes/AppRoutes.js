import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../components/Login/Login";
import Dashboard from "../components/Dashboard/dashboard";
import CreateProject from "../components/Project/CreateProject";
import SignUp from "../components/Login/SignUp";

export default function Approutes(props) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Layout 1: which holds navigation bar plus the Outlets i.e. routes at which user can go from navbar */}
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/create-project" element={<CreateProject />}></Route>
          </Route>

          {/* Layout 2: Login Screen with no navbar, this layout contains just a single form */}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
