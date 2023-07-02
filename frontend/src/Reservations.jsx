import React, { Component, useEffect, useState } from 'react';
import logo from "./silverLogo.png";
import { useNavigate } from 'react-router-dom';
import background from "./login_signup_background.png";
import './Reservations.css';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Reservations = (props) => {
    const myStyle = {
        backgroundImage: `url(${background})`,
        height: '100vh',
        margin: '-10px',
        marginTop: '-20px',
        marginRight: '-8px',
        padding: '0px',
        paddingBottom: '11px',
        fontSize: '50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      };

      const navigate = useNavigate();
      const [name , setName] = useState('')

      const handleSubmitRegularView = (reservation_viewid ) => { 
        const name= "Regular";
        localStorage.removeItem("reservation_viewid");
        localStorage.setItem("reservation_viewid", reservation_viewid);
        localStorage.removeItem("reservation_type");
        localStorage.setItem("reservation_type", name);
        console.log("Reservation Type", name)
        props.setReservationType(name)
        navigate('/Regular')
      }

      const handleSubmitShortView = (reservation_viewid ) => { 
        const name ="Short"
        localStorage.removeItem("reservation_viewid");
        localStorage.setItem("reservation_viewid", reservation_viewid);
        localStorage.removeItem("reservation_type");
        localStorage.setItem("reservation_type", name);
        props.setReservationType(name)
        navigate('/Short')
      }

      const getCurentUser = () =>
      {
        let userToken = localStorage.getItem("userToken")
        
        axios.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
        axios.get("http://127.0.0.1:5000/users/viewuprofile")
          .then(res=> {
                    //console.log(res.data)
                  // setUserID(res.data._id);
                   setName(res.data.name);
                  // setProfileImg(res.data.profileimg)
          }).catch (err=> {
              console.log(err) })
      }

      useEffect(() =>
      {
        getCurentUser();

      } ,[])
      const handleSubmitReceiptView = () => { 
        
        navigate('/Receipt')
      }

     
    return (
        <div style={myStyle}>
            <div className="navi">
                <img src={logo} width={375} height={50} style={{ padding: "20px", paddingBottom: "10px", paddingTop: "30px" }} />
                 <div className="topnav">
                {/* <a href="/Login">Logout</a>
                <a href="#third">Contact</a>
                <a href="#second">Dashboard</a>
                <a href="#first">Routes</a> */}
                <a href="/userHome">Back</a>
                </div> 
            </div>
            <br></br>
            <br></br>
            <div class="heading">
                <h3>HELLO {name}!</h3>
                <h4>WHAT WOULD YOU LIKE TO DO TODAY?</h4>
            </div>

            <div class="buttons">
                <center>
                    <button name="Regular" onClick={() => handleSubmitRegularView(props._id, props.reservation_type) }>Regular Reservation</button>
                    <button name ="Short" onClick={() => handleSubmitShortView(props._id , props.reservation_type) }>Short Reservation</button>
                    <button name="Receipt" onClick={() => handleSubmitReceiptView()}>View Receipt</button>
                </center>  
                
            </div>

           
        </div>
    )
}

export default Reservations;