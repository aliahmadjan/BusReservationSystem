import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Form.css";
import axios from 'axios'

export default function Form() {
  const [adminID , setAdminID] = useState("");
  const [password , setPassword] = useState("");
  const navigate = useNavigate();

  const loginAdmin = async(e) =>
  {
    e.preventDefault();
    try {
       const res=  await axios.post('http://127.0.0.1:5000/admin/login', {
            adminID: adminID,
            password: password,
        });
          localStorage.setItem("adminToken",res.data[1]);
          //console.log(localStorage.getItem('adminToken'))
        // setIsLoggedIn(true);
          navigate("/adminDashboard");
    } catch (error) {
      if (error.response && error.response.status === 401) {
          // setSubmitStatus("Invalid Credentials");
        } else {
          // Handle other errors here
          console.error(error);
      }
  }
}
  return (
    <form onSubmit={loginAdmin} className="form-container">
      <div className="form-input">
        <label htmlFor="adminId">Admin ID</label>
        <input
          type="text"
          id="adminId"
          // value={adminId}
          onChange={(event) => setAdminID(event.target.value)}
        />
      </div>
      <div className="form-input">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          // value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
