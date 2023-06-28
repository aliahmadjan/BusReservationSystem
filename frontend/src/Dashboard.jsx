import React, { Component } from 'react';
import logo from "./silverLogo.png";
import { useNavigate } from 'react-router-dom';
import background from "./login_signup_background.png";
import './Dashboard.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Dashboard() {
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
                    <Link to="/Regular"><button>Regular Reservation</button></Link>
                    <Link to="/Short"><button>Short Reservation</button></Link>
                </center>  
            </div>
        </div>
    )
}

export default Dashboard;