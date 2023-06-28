import React, { Component } from 'react';
import logo from "./silverLogo.png";
import { useNavigate } from 'react-router-dom';
import background from "./login_signup_background.png";
import './Regular.css';

function Regular() {
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
            <div class="heading">
                <h5>BOOK YOUR REGULAR RESERVATION, DANISH!</h5>
                <p style={{fontSize:"30px", paddingTop:'0px'}}>NOW YOU CAN BOOK YOUR SEAT WITH EASE.</p>
            </div>
            <div class="flexbox-container">
                <form>
                    <div className="left-column">
                        <label htmlFor="universityID">University ID:</label><input type="text" id="universityID" name="universityID"/><br></br>
                        <label htmlFor="destination">Destination:</label><input type="text" id="destination" name="destination"/><br></br>
                        <label htmlFor="contact">Contact:</label><input type="text" id="contact" name="contact"/><br></br>
                    </div>

                    <div className="right-column">
                        <label htmlFor="startDate">Starting Date:</label><input type="date" id="startDate" name="startDate"/><br></br>
                        <label htmlFor="endDate">Ending Date:</label><input type="date" id="endDate" name="endDate"/><br></br>
                        <label htmlFor="emergencyContact">Emergency Contact:</label><input type="text" id="emergencyContact" name="emergencyContact"/>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>   
    )
}

export default Regular;