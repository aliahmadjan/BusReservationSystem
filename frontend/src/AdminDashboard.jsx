import React, {useState, useEffect} from "react";
import Navbar1 from "./navbar1";
import { Link } from "react-router-dom";
import "./admindash.css";
import Sidebar from "./sidebar";
import axios from 'axios'

export default function AdminDashboard() {
  
  const [name , setName] = useState("")

  const getCurrentAdmin = () =>
  {
    let adminToken = localStorage.getItem("adminToken")
    //console.log(adminToken)
    axios.defaults.headers.common["Authorization"] = `Bearer ${adminToken}`;
    axios.get("http://127.0.0.1:5000/admin/viewaprofile")
      .then(res=> {
               console.log(res.data)
              // setUserID(res.data._id);
               setName(res.data.name);
              // setProfileImg(res.data.profileimg)
      }).catch (err=> {
          console.log(err) })
  }

  useEffect(() =>
  {
    getCurrentAdmin();
  }, [])
  
  
  return (
    <div className="backcolor">
      {/* <div> */}
        {/* <div class="container"> */}
          <Sidebar />
        {/* </div> */}
        <div class="heading">
          <h3>Hello {name}!</h3>
          <h4>WHAT WOULD YOU LIKE TO DO TODAY?</h4>
        </div>
      </div>
    // </div>
  );
}
