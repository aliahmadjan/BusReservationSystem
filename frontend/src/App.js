import React , {useState }from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import UserLogin from "./Login"
import Dashboard from "./Dashboard";
import Regular from "./Regular";
import Short from "./Short";
import Admin from "./Admin";
import AdminDash from "./Admin-Dash";
import MainPage from "./Main-Page";
import AddBuses from "./AddBuses";
import AddDrivers from "./AddDrivers";
import AddRoutes from "./AddRoutes";
import ManangeReservations from "./ManageReservations"
import Receipt from "./Receipt";
import ViewRoutes from "./ViewRoutes";
import ViewDrivers from "./ViewDrivers";
import ViewBuses from "./ViewBuses";


function App() {

  const [reservation_type , setReservationType] = useState("")
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
      <Route path="/Login" element={<UserLogin />} />
      <Route path="/reservations" element={<Dashboard setReservationType = {(value) => setReservationType(value)}/>} />
      <Route path="/Regular" element={<Regular reservation_type = {reservation_type}/>} />
      <Route path="/Short" element={<Short reservation_type = {reservation_type}/>} />
      <Route path="/Receipt" element={<Receipt reservation_type = {reservation_type}/>}/>
      <Route path="/addbus" element={<AddBuses/> }/>
      <Route path="/adddriver" element={<AddDrivers/>}/>
      <Route path="/addroute" element={<AddRoutes/>}/>
      <Route path="/managereservations" element={<ManangeReservations/>}/>
      <Route path="/viewroutes" element={<ViewRoutes/>}/>
      <Route path="/viewdrivers" element={<ViewDrivers/>}/>
      <Route path ="/viewbuses" element={<ViewBuses/>}/>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Login" element={<Login />} /> */}
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
