import React, {useState } from 'react';
import './Login.css';
import image from "./login_signup.jpg";
import logo from "./silverLogo.png";
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios'


const UserLogin = () => {

 
  const [uniID , setUniID] = useState("");
  const [password , setPassword] = useState("");
  const navigate = useNavigate();

  const myStyle = {
    backgroundColor: `#0A253B`,
    height: '100vh',
    margin: '-10px',
    marginTop: '-20px',
    marginRight: '-8px',
    padding: '0px',
    paddingBottom:'11px',
    fontSize: '50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  const loginUser = async(e) =>
  {
    e.preventDefault();
    try {
       const res=  await axios.post('http://127.0.0.1:5000/users/login', {
            uniID: uniID,
            password: password,
        });
          localStorage.setItem("userToken",res.data[1]);
          console.log(localStorage.getItem('userToken'))
        // setIsLoggedIn(true);
          navigate("/");
    } catch (error) {
      if (error.response && error.response.status === 401) {
          // setSubmitStatus("Invalid Credentials");
        } else {
          // Handle other errors here
          console.error(error);
      }
  }
}
  

  return (
    <div style={myStyle}>
      <div className="navi">
        <img src={logo} width={375} height={50} style={{ padding: "20px", paddingBottom: "10px", paddingTop: "30px" }} />
        <div className="topnav">
          <a href="/Login">Login</a>
          <a href="#third">Contact</a>
          <a href="#first">Routes</a>
          <a href="#Home">Home</a>
        </div>
      </div>
      <br></br>
      <br></br>
      <div class="flexbox-container1">
        <div class="imagediv" style={{width:'30%', float:'left'}}>
          <img src={image} width={350} height={500} style={{borderRadius:'25px'}}/>
        </div>
        <div class="formdiv" style={{width:'30%', float:'right'}}>
          <center><p>Login to Your Account</p></center>
          <form>
                  <div class="d-flex flex-column pb-3"> <label for="name">University ID:</label><br></br>
                  <input 
                  type="text"
                  onChange={e => setUniID(e.target.value)} 
                  name="email"
                  id="name" class="border-bottom border-primary"/> </div>
                  <br></br>
                  <div class="d-flex flex-column pb-3"> <label for="registrationid">Password:</label><br></br>
                  <input 
                  onChange={e => setPassword(e.target.value)} 
                  type="id" name="regitrationid" id="rid" class="border-bottom border-primary"/> </div>
                  <div class="d-flex flex-column pb-3">
                    <center><Link to="/Dashboard"><button
                    onClick={loginUser}
                    >Login</button></Link></center>
                    <center><label>Forgot Password?</label></center>
                  </div>
                </form>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;