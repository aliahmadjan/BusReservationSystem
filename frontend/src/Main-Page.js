import React from "react";
import Navbar1 from "./navbar1";
import "./mainpage.css";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="backcolor">
      <div>
        <Navbar1 />
      </div>
      <h1>Welcome to Bus Reservation System</h1>
      <div className="centerr">
        <Link to="/adminLogin">
          <button>Admin Login</button>
        </Link>
        <Link to="/userLogin">
          <button>User Login</button>
        </Link>
      </div>
    </div>
  );
}
