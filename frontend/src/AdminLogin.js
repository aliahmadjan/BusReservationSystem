import React from "react";
import Navbar1 from "./navbar1";
import "./App.css";
import Form from "./Form";

export default function AdminLogin() {
  return (
    <div className="back">
      <div>
        <Navbar1 className="Nav" />
      </div>
      <div className="form">
        <div className="img"></div>
        <div className="form-1">
          <h2>Welcome to admin portal</h2>
          <Form />
        </div>
      </div>
    </div>
  );
}
