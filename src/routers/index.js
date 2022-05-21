import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ParamCard from "../components/cardsPara";
import Header from "../components/header";
import Home from "../pages/home/home";

const Routing = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {["/", "/home"].map((path) => (
          <Route exact path={path} element={<Home />} />
        ))}
        <Route exact path="/:card" element={<ParamCard />} />
      </Routes>
    </Router>
  );
};

export default Routing;
