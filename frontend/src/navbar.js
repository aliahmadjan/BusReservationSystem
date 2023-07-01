import React, { useState } from "react";
import logo from "./silverLogo.png";
import "./App.css";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div class="navigation">
      <img
        src={logo}
        width={375}
        height={50}
        style={{ padding: "20px", paddingBottom: "10px", paddingTop: "25px" }}
      />
      <div class="topnav">
        <a href="#third">Contact</a>
        <a href="#first">Routes</a>
        <a className="active" href="#Home">
          Home
        </a>
        {isLoggedIn && (
          <>
            <a href="/dashboard">Dashboard</a>
            <a>
              <button onClick={handleLogout}>Logout</button>
            </a>
          </>
        )}
        {!isLoggedIn && (
          <a>
            <button onClick={handleLogin}>Login</button>
          </a>
        )}
      </div>
    </div>
  );
}
