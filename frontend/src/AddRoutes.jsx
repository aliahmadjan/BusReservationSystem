import React, { Component , useState, useEffect} from 'react';
import logo from "./silverLogo.png";
import { useNavigate } from 'react-router-dom';
import background from "./login_signup_background.png";
import './AddRoutes.css';
import axios from 'axios'

const AddRoutes = () => {
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
    const [driverName , setDriverName] = useState("")
    const [route , setRoute] = useState("")
    const [stops , setStops] = useState("")

    const [successMessage, setSuccessMessage] = useState('');

    const postRoutes = (e) =>
    {
      e.preventDefault();  
            axios.post("http://127.0.0.1:5000/admin/addroutes", {
          // method : 'POST',
          // formData
          'busID': busID,
          'driverName' : driverName,
          'route': route,
          'stops' :stops
      }).then((res) =>
      {

        setSuccessMessage('Route Added Successfully!');
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
                {/* <a href="/Login">Logout</a>
                <a href="#third">Contact</a>
                <a href="#second">Dashboard</a>
                <a href="#first">Routes</a> */}
                <a href="/adminDashboard">Back</a>
                </div>
            </div>
            <br></br>
            <div class="heading">
                <h5>Add Routes</h5>
           
            </div>
            <div class="flexbox-container">
                <form onSubmit={postRoutes}>
                    <div className="left-column">
                        <label htmlFor="busID">Bus ID:</label><input type="text"
                        onChange={(e) => setBusID(e.target.value)}
                        id="busID" name="busID"/><br></br>
                        <label htmlFor="driverName">Driver Name:</label><input type="text"
                        onChange={(e) => setDriverName(e.target.value)}
                        id="driverName" name="driverName"/><br></br>
                        <label htmlFor="route">Route:</label><input type="text" 
                        onChange={(e) => setRoute(e.target.value)}
                        id="route" name="route"/><br></br>
                        <label htmlFor="stops">Stops:</label><input type="text" 
                        onChange={(e) => setStops(e.target.value)}
                        id="stops" name="stops"/><br></br>
                        <button type='submit'>Submit</button>
                    </div>

                  
                    
                </form>
            </div>
            {successMessage && <div className="success">{successMessage}</div>}
            
        </div>   
    )
}

export default AddRoutes;