import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogIn from "./LogIn";
import SideBar from "./SideBar";

const Routers = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/comanydetails" element={<SideBar />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;
