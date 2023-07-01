import React, { Component , useState, useEffect} from 'react';
import logo from "./silverLogo.png";
import { useNavigate } from 'react-router-dom';
import background from "./login_signup_background.png";
import './AddBuses.css';
import axios from 'axios'

const AddBuses = () => {
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

      const [busID , setBusID] = useState("");
      const [noOfSeats , setNoOfSeats] = useState("");
      const [availableSeats , setAvailableSeats] = useState("")
      const [driverName , setDriverName] = useState("")
      
      const [successMessage, setSuccessMessage] = useState('');
     

    const postBuses = (e) =>
    {
      e.preventDefault();  
     
      axios.post("http://127.0.0.1:5000/admin/addbuses", {
          // method : 'POST',
          // formData
          'busID' : busID,
          'no_of_seats' : noOfSeats,
          'available_seats' : availableSeats,
          'driverName' : driverName
      }).then((res) =>
      {
        setSuccessMessage('Bus Added Successfully!');
              // res.json();
      }).catch((err) => {
          console.log(err)
      })
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
            <div class="heading">
                <h5>Add Bus</h5>
                {/* <p style={{fontSize:"30px"}}>NOW YOU CAN BOOK YOUR SEAT WITH EASE.</p> */}
            </div>
            <div class="flexbox-container">
                <form onSubmit={postBuses}>
                    <div className="left-column">
                        <label htmlFor="busID">Bus ID:</label><input type="text"
                        onChange={(e) => setBusID(e.target.value)}
                        id="busID" name="busID"/><br></br>

                        <label htmlFor="noOfSeats">No of Seats:</label><input type="text"
                        onChange={(e) => setNoOfSeats(e.target.value)}
                        id="noOfSeats" name="noOfSeats"/><br></br>
                        <label htmlFor="availableSeats">Contact:</label><input type="text" 
                        onChange={(e) => setAvailableSeats(e.target.value)}
                        id="availableSeats" name="availableSeats"/><br></br>
                          <label htmlFor="driverName">Driver Name:</label><input type="text" 
                        onChange={(e) => setDriverName(e.target.value)}
                        id="driverName" name="driverName"/><br></br>
                        <button type='submit'>Submit</button>
                    </div>

                  
                    
                </form>
            </div>
            {successMessage && <div className="success">{successMessage}</div>}
        </div>   

    )
}

export default AddBuses;