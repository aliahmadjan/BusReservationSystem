import React, { Component, useEffect } from 'react';
import './Receipt.css';
import logo from "./silverLogo.png";
// import sign from "./signature.png";
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import background from "./login_signup_background.png";
import { useState } from 'react';
import axios from 'axios'

const Receipt = () => {
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
        const [name , setName] = useState("")
        const [services, setServices] = useState([])
        const [startdate , setStartDate] = useState("")
        const [enddate , setEndDate] = useState("")
        const [seats , setSeats] = useState()
        const [amount, setAmount ] = useState()
      
        const getCurentUser = () =>
        {
          let userToken = localStorage.getItem("userToken")
          console.log(userToken)
          axios.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
          axios.get("http://127.0.0.1:5000/users/viewuprofile")
            .then(res=> {
                    console.log(res.data)
                    // setUserID(res.data._id);
                     setName(res.data.name);
                    // setProfileImg(res.data.profileimg)
            }).catch (err=> {
                console.log(err) })
        }

        const getReceipt = () =>
      {
        axios.get('http://127.0.0.1:5000/admin/getreceipt').then((res) =>
        {
            //console.log(res.data)
            setServices(res.data)
            setStartDate(res.data.services.startdate)
            setEndDate(res.data.services.enddate)
            setSeats(res.data.seats)
            setAmount(res.data.amount)
        }).catch((err) => 
        {
            console.log(err)
        })
      }

      useEffect(() =>
      {
        getCurentUser();
        getReceipt();
        
      },[])


      const formatStartDate = (startdate) =>
      {
        const options = {
          day: "numeric",
          month: "long",
          year: "numeric",
        };
        const date = new Date(startdate);
        return date.toLocaleString("en-US", options);
  
      }

      const formatEndDate = (enddate) =>
      {
        const options = {
          day: "numeric",
          month: "long",
          year: "numeric",
        };
        const date = new Date(enddate);
        return date.toLocaleString("en-US", options);
  
      }




      return (
        <div style={myStyle}>
            <div className="navi">
                <img src={logo} width={375} height={50} style={{ padding: "20px", paddingBottom: "10px", paddingTop: "30px" }} />
                <div className="topnav">
                <a href="/reservations">Back</a>
                {/* <a href="#third">Contact</a>
                <a href="#second">Dashboard</a>
                <a href="#first">Routes</a>
                <a href="#Home">Home</a> */}
                </div>
            </div>
            <br></br>
            <div class="heading">
                <h5>Thank You,{name}!</h5>
                <p style={{fontSize:"30px"}}>Your booking has been confirmed :).</p>
            </div>
            <center>
                <div class="table1">
                    <table>   
                        <tr>
                            <th style={{ width: '50%' }}>Services</th>
                                <th style={{ width: '25%' }}>Seat(s)</th>
                                <th style={{ width: '25%' }}>Amount</th>
                        </tr>
                        {services.map((data,index) =>
                        {
                        return (
                        
                        <tr key={index}>
                            <td><center>Bus Reservation ( {formatStartDate(data.services.startdate)} - {formatEndDate(data.services.enddate)})</center></td>
                            <td><center>{data.seats}</center></td>
                            <td><center>RS. {data.amount} </center></td>
                        </tr>
                        )
                        })}
                    </table>
                    <h5 style={{color:'white'}}>Happy Travelling :)</h5>
                </div>
            </center>
        </div>
    );
}

export default Receipt;