import React from "react";
import Navbar1 from "./navbar1";
import { Link } from "react-router-dom";
import "./admindash.css";
import Sidebar from "./sidebar";

export default function AdminDash() {
  return (
    <div className="backcolor">
      <div>
        <div class="container">
          <Sidebar />
        </div>
        <div class="heading">
          <h3>HELLO DANISH!</h3>
          <h4>WHAT WOULD YOU LIKE TO DO TODAY?</h4>
        </div>
      </div>
    </div>
  );
}
