import React, { Component } from 'react';
import logo from "./silverLogo.png";
import { useNavigate } from 'react-router-dom';
import background from "./login_signup_background.png";
import './Dashboard.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Dashboard = (props) => {
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

      const handleSubmitReceiptView = (reservation_viewid ) => { 
        const name ="Short"
        localStorage.removeItem("reservation_viewid");
        localStorage.setItem("reservation_viewid", reservation_viewid);
        localStorage.removeItem("reservation_type");
        localStorage.setItem("reservation_type", name);
        props.setReservationType(name)
        navigate('/Receipt')
      }
    return (
        <div style={myStyle}>
            <div className="navi">
                <img src={logo} width={375} height={50} style={{ padding: "20px", paddingBottom: "10px", paddingTop: "30px" }} />
                <div className="topnav">
                <a href="/Login">Logout</a>
                <a href="#third">Contact</a>
                <a href="#second">Dashboard</a>
                <a href="#first">Routes</a>
                <a href="#Home">Home</a>
                </div>
            </div>
            <br></br>
            <br></br>
            <div class="heading">
                <h3>HELLO DANISH!</h3>
                <h4>WHAT WOULD YOU LIKE TO DO TODAY?</h4>
            </div>

            <div class="buttons">
                <center>
                    <button name="Regular" onClick={() => handleSubmitRegularView(props._id, props.reservation_type) }>Regular Reservation</button>
                    <button name ="Short" onClick={() => handleSubmitShortView(props._id , props.reservation_type) }>Short Reservation</button>
                    <button name="Receipt" onClick={() => handleSubmitReceiptView(props._id ,props.reservation_type)}>View Receipt</button>
                </center>  
            </div>
        </div>
    )
}

export default Dashboard;