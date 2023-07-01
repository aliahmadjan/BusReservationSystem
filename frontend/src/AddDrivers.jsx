import React, { Component , useState, useEffect} from 'react';
import logo from "./silverLogo.png";
import { useNavigate } from 'react-router-dom';
import background from "./login_signup_background.png";
import './AddDrivers.css';
import axios from 'axios'

const AddDrivers = () => {
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

     const [driverName, setDriverName] = useState("")
     const [cnic , setCnic ] = useState("")
     const [license_no , setLicenseNo] = useState("")
     const [driver_status , setDriverStatus] = useState("")

     const [successMessage, setSuccessMessage] = useState('');
     

    const postDrivers = (e) =>
    {
      e.preventDefault();  
    
      axios.post("http://127.0.0.1:5000/admin/adddrivers", {
         
          'driverName' : driverName,
          'cnic' : cnic,
          'license_no' : license_no,
           'driver_status' : driver_status
      }).then((res) =>
      {
        setSuccessMessage('Driver Added Successfully!');
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
                <h5>Add Driver!</h5>
                
            </div>
            <div class="flexbox-container">
                <form onSubmit={postDrivers}>
                    <div className="left-column">
                        <label htmlFor="driverName">Driver Name:</label><input type="text"
                        onChange={(e) => setDriverName(e.target.value)}
                        id="driverName" name="driverName"/><br></br>
                        <label htmlFor="cnic">CNIC :</label><input type="text"
                        onChange={(e) => setCnic(e.target.value)}
                        id="cnic" name="cnic"/><br></br>
                        <label htmlFor="licenseno">License No:</label><input type="text" 
                        onChange={(e) => setLicenseNo(e.target.value)}
                        id="licenseno" name="licenseno"/><br></br>
                        <label htmlFor="driverStatus">Driver Status:</label><input type="text" 
                        onChange={(e) => setDriverStatus(e.target.value)}
                        id="driverStatus" name="driverStatus"/><br></br>
                        <button type='submit'>Submit</button>
                    </div>

                    
                    
                </form>
                {successMessage && <div className="success">{successMessage}</div>}
            </div>
            
        </div>   
    )
}

export default AddDrivers;