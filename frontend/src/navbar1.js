import React from "react";
import logo from "./silverLogo.png";
import "./App.css";

export default function Navbar1() {
  return (
    <div class="navigation">
      <img
        src={logo}
        width={375}
        height={50}
        style={{ padding: "20px", paddingBottom: "10px", paddingTop: "25px" }}
      />
    </div>
  );
}
