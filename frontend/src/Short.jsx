import React, { Component , useState, useEffect} from 'react';
import logo from "./silverLogo.png";
import { useNavigate } from 'react-router-dom';
import background from "./login_signup_background.png";
import './Short.css';
import axios from 'axios'

const Short = (props) => {
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

      const [uniID , setUniID] = useState("");
      const [name , setName] = useState("");
      const [destination , setDestination] = useState("")
      const [contact , setContact] = useState("")
      const [startdate , setStartDate] = useState(new Date())
      const [enddate , setEndDate] = useState(new Date())
      const [reservation_type , setReservationType ]= useState("")
      const [emergencyContact , setEmergencyContact] = useState("")

      const [successMessage, setSuccessMessage] = useState('');
        const [errorMessage, setErrorMessage] = useState('');

      const getCurentUser = () =>
      {
        let userToken = localStorage.getItem("userToken")
        console.log(userToken)
        axios.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
        axios.get("http://127.0.0.1:5000/users/viewprofile")
          .then(res=> {
                    //console.log(res.data)
                  // setUserID(res.data._id);
                   setName(res.data.name);
                  // setProfileImg(res.data.profileimg)
          }).catch (err=> {
              console.log(err) })
      }

    const postReservations = (e) =>
    {
      e.preventDefault();  
      // Calculate the difference in days between startdate and enddate
      const startDate = new Date(startdate);
      const endDate = new Date(enddate);
      const differenceInTime = endDate.getTime() - startDate.getTime();
      const differenceInDays = differenceInTime / (1000 * 3600 * 24);

      // Check if the difference is at least 30 days
      if (differenceInDays < 7) {
        setSuccessMessage('');
        setErrorMessage('The reservation should be at least 7 days apart.!');
          console.log("The reservation should be at least 7 days apart.");
          return;
      } 

      else {
      axios.post("http://127.0.0.1:5000/users/reservations", {
          // method : 'POST',
          // formData
          'uniID' : uniID,
          "name" : name,
          "destination" : destination,
          "contact": contact,
          "startdate" : startdate,
          "enddate": enddate,
          "emergency_contact" :emergencyContact,
          "reservation_type": props.reservation_type,
      }).then((res) =>
      {
        setSuccessMessage('Regular Reservation successful!');
         setErrorMessage('');
              // res.json();
      }).catch((err) => {
          console.log(err)
      })
    }
    }


   
  
    useEffect(() =>
    {
      getCurentUser();
    }, [])
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
                <h5>BOOK YOUR SHORT RESERVATION, {name}!</h5>
                <p style={{fontSize:"30px"}}>NOW YOU CAN BOOK YOUR SEAT WITH EASE.</p>
            </div>
            <div class="flexbox-container">
                <form onSubmit={postReservations}>
                    <div className="left-column">
                        <label htmlFor="universityID">University ID:</label><input type="text"
                        onChange={(e) => setUniID(e.target.value)}
                        id="universityID" name="universityID"/><br></br>
                        <label htmlFor="destination">Destination:</label><input type="text"
                        onChange={(e) => setDestination(e.target.value)}
                        id="destination" name="destination"/><br></br>
                        <label htmlFor="contact">Contact:</label><input type="text" 
                        onChange={(e) => setContact(e.target.value)}
                        id="contact" name="contact"/><br></br>
                    </div>

                    <div className="right-column">
                        <label htmlFor="startDate">Starting Date:</label><input type="date"
                        onChange={(e) => setStartDate(e.target.value)}
                        id="startDate" name="startDate"/><br></br>
                        <label htmlFor="endDate">Ending Date:</label><input type="date" 
                        onChange={(e) => setEndDate(e.target.value)}
                        id="endDate" name="endDate"/><br></br>
                        <label htmlFor="emergencyContact">Emergency Contact:</label><input type="text" 
                        onChange={(e) => setEmergencyContact(e.target.value)}
                        id="emergencyContact" name="emergencyContact"/>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
            {successMessage && <div className="success">{successMessage}</div>}
                {errorMessage && <div className="error">{errorMessage}</div>}
        </div>   
    )
}

export default Short;