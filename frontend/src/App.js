import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Regular from "./Regular";
import Short from "./Short";
import Admin from "./Admin";
import AdminDash from "./Admin-Dash";
import MainPage from "./Main-Page";

function App() {
  return (
    /*<Router>
      <Header />

      <Routes path="/Upload">
        <Upload />
      </Routes>
    </Router>*/

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Regular" element={<Regular />} />
        <Route path="/Short" element={<Short />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/AdminDash" element={<AdminDash />} />
        <Route path="/Main" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
