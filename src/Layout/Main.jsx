import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Themes from "../components/Themes";
import "./Main.css";
const Main = () => {
  return (
    <div>
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <Navbar />
        <Themes />
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
