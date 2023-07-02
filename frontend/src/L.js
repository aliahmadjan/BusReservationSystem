import React , {useState, useEffect} from 'react';
import './App.css';
import background from "./main_background_e.png";
import logo from "./silverLogo.png";
import mainimage1 from "./mainimage1.jpeg";
import mainimage3 from "./mainimage3.jpg";
import mainimage2 from "./mainimage2.jpg";
import location from "./footer.JPG";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';


const UserHome = () => {
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
  const [name , setName] = useState("")

  const [regID, setRegID] = useState("")
  const [contact , setContact] = useState("")
  const [message , setMessage] = useState("")

  const [routes , setRoutes] = useState([])

  const [successMessage, setSuccessMessage] = useState('');

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

    const getRoutes = () =>
    {
      axios.get('http://127.0.0.1:5000/admin/getroutes').then((res)=>
      {
        console.log(res.data)
        setRoutes(res.data)
      }).catch((err)=>
      {
        console.log(err)
      })
    }

  const sendMessages = (e) =>
  {
    e.preventDefault()
    axios.post('http://127.0.0.1:5000/users/messages',
    {
      'name' : name,
      'regID' : regID,
      'contact': contact,
      'message': message
    }).then((res)=>
    {
      setSuccessMessage('Message Sent successfully!');

    }).catch((err) =>
    {
      console.log(err)
    })
  }

  useEffect(() =>
  {
    getCurentUser();
    getRoutes();
  }, [])


  
    return (
      <div  style={myStyle}>
        <div class="navigation">
        <img src={logo} width={375} height={50} style={{ padding: "20px", paddingBottom: "10px", paddingTop: "25px" }} />
          <div class="topnav">    
            {/* <a href="/login">Login</a> */}
            <a href="#third">Contact</a>
            <a href="#first">Routes</a>
            <a href="/reservations">Reservations</a>
            <a href='/'>Logout</a>
            <a className="active" href="#Home">Home</a>
          </div>
        </div>
        
          <div class="heading">
            <br></br>
            <br></br>
            <center><h1>Welcome To PAF-IAST's Transport Office</h1></center>
          </div>

          {/* <div>
                <center><Link to="/Login"><button className='loginButton'>Login</button></Link></center>
          </div> */}
          <div class="our_routes"  id="first">
            <br></br>
            <center><h2>Our Routes</h2></center>
          </div>
          {routes.map((data,index) =>
          {
            return(
              <div class="flexbox-container1">
            <div style={{width:400, height:200, backgroundColor: "#0B2C48", color:'white', border: "10px solid white", borderRadius: "30px"}}>
              <center><p style={{fontSize:"40px", marginTop:"5px"}}><b>{data.route}</b></p></center>
              <center><p style={{fontSize:"20px"}}>{data.stops}</p></center>
              
            </div>
            
          </div>
            )
          })}
          
          <div class="flexbox-container2" id="second">
            <div style={{border: "20px", paddingTop:"50px"}}>
              <img src={mainimage1} width={350} height={200}/>
            </div>
            <div style={{width:800, height:200, border: "50px solid #0B2C48", paddingTop:"15px"}}>
              <p style={{fontSize:"20px", color:"white"}}>A transport management system (TMS) is a software solution that streamlines and optimizes the processes of planning, executing, and monitoring transportation operations. The system can help businesses of all sizes improve their transportation processes, from local deliveries to global logistics.</p>
            </div>
            <div style={{width:800, height:200, border: "50px solid #0B2C48", paddingTop:"10px", paddingBottom:"-10px"}}>
              <p style={{fontSize:"20px", color:"white"}}>A transport management system (TMS) is a software solution that streamlines and optimizes the processes of planning, executing, and monitoring transportation operations. The system can help businesses of all sizes improve their transportation processes, from local deliveries to global logistics.</p>
            </div>
            <div style={{border: "20px", paddingTop:"30px", paddingBottom:"-10px"}}>
              <img src={mainimage2} width={350} height={200}/>
            </div>
            <div style={{border: "50px solid #0B2C48", paddingTop:"-10px"}}>
              <img src={mainimage3} width={350} height={200}/>
            </div>
            <div style={{width:800, height:200, border: "50px solid #0B2C48", paddingTop:"10px"}}>
              <p style={{fontSize:"20px", color:"white"}}>A transport management system (TMS) is a software solution that streamlines and optimizes the processes of planning, executing, and monitoring transportation operations. The system can help businesses of all sizes improve their transportation processes, from local deliveries to global logistics.</p>
            </div>
          </div>
          <center><h2 style={{color: "#0B2C48", paddingTop:'0px', marginTop:'100px'}}>Get In Touch</h2></center>
          <div class="flexbox-container5" id="third">
            <div style={{borderRight: "100px solid white", paddingTop:"-10px"}}>
              <img src={location} width={400} height={250}/>
              <br></br>
                <p style={{fontSize:"20px"}}>transport@paf-iast.edu.pk</p>
                <p style={{fontSize:"20px"}}>0334-8132424</p>
            </div>  
            <div class="container bg-white pb-5">
              <div class="row d-flex justify-content-start align-items-center mt-sm-5">
                <form onSubmit={postMessage} style={{borderLeft: "100px solid white"}}>
                  <div class="d-flex flex-column pb-3"> <label for="name">Name:</label><br></br><input
                  onChange={(e) => setName(e.target.value)}
                  type="text" name="email" id="name" class="border-bottom border-primary"/> </div>
                  <div class="d-flex flex-column pb-3"> <label for="registrationid">Registration ID:</label><br></br><input
                  onChange={(e) => setRegID(e.target.value)}
                  type="id" name="regitrationid" id="rid" class="border-bottom border-primary"/> </div>
                  <div class="d-flex flex-column pb-3"> <label for="contact">Contact:</label><br></br><input
                  onChange={(e) => setContact(e.target.value)}
                  type="longint" name="contact" id="cntc" class="border-bottom border-primary"/> </div>
                  <div class="d-flex flex-column pb-3"> <label for="message">Message:</label><br></br><input
                  onChange={(e) => setMessage(e.target.value)}
                  type="text" name="message" id="msg" class="border-bottom border-primary"/> </div>
                  <br></br>
                  <div class="d-flex flex-column pb-3"> <button type='submit'>Send</button></div>
                </form>
                
              </div>
              {successMessage && <div className="success">{successMessage}</div>}
           </div>
          </div>
        </div>
    );
  }

export default App;
