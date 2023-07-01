import React, { useState } from "react";
import "./Form.css";

export default function Form() {
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Admin ID:", adminId);
    console.log("Password:", password);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-input">
        <label htmlFor="adminId">Admin ID</label>
        <input
          type="text"
          id="adminId"
          value={adminId}
          onChange={(event) => setAdminId(event.target.value)}
        />
      </div>
      <div className="form-input">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
