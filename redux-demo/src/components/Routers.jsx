import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LogIn from "./LogIn";
import SideBar from "./SideBar";

const isLogIn = Boolean;

const token = localStorage.getItem("myToken");
console.log("token++++++++++", token);
const mytoken = JSON.parse(token);

const Routers = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="*"
            element={
              mytoken ? (
                <Navigate to="/comanydetails" />
              ) : (
                <Navigate to="/log-in" />
              )
            }
          />
          <Route path="/log-in" element={<LogIn />} />
          <Route
            path="/comanydetails"
            element={
              <>
                <SideBar />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;
