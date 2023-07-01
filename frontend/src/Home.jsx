import React from "react";
import "./App.css";
import background from "./main_background_e.png";
import Navbar from "./navbar";
import mainimage1 from "./mainimage1.jpeg";
import mainimage3 from "./mainimage3.jpg";
import mainimage2 from "./mainimage2.jpg";
import location from "./footer.JPG";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

function App() {
  const myStyle = {
    backgroundImage: `url(${background})`,
    height: "100vh",
    margin: "-10px",
    marginTop: "-20px",
    marginRight: "-8px",
    padding: "0px",
    paddingBottom: "11px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const navigate = useNavigate();
  return (
    <div style={myStyle}>
      <Navbar />

      <div class="heading">
        <br></br>
        <br></br>
        <center>
          <h1>Welcome To PAF-IAST's Transport Office</h1>
        </center>
      </div>

      <div>
        <center>
          <Link to="/Login">
            <button className="loginButton">Login</button>
          </Link>
        </center>
      </div>
      <div class="our_routes" id="first">
        <br></br>
        <center>
          <h2>Our Routes</h2>
        </center>
      </div>
      <div class="flexbox-container1">
        <div
          style={{
            width: 400,
            height: 200,
            backgroundColor: "#0B2C48",
            color: "white",
            border: "10px solid white",
            borderRadius: "30px",
          }}
        >
          <center>
            <p style={{ fontSize: "40px", marginTop: "5px" }}>
              <b>Islamabad</b>
            </p>
          </center>
          <center>
            <p style={{ fontSize: "20px" }}>
              26 Number, G-14, G-13, G-11, G-9,
            </p>
          </center>
          <center>
            <p style={{ fontSize: "20px" }}>Faizabad, IJP Road, Koral Chowk</p>
          </center>
        </div>
        <div
          style={{
            width: 400,
            height: 200,
            backgroundColor: "#0B2C48",
            color: "white",
            border: "10px solid white",
            borderRadius: "30px",
          }}
        >
          <center>
            <p style={{ fontSize: "40px", marginTop: "5px" }}>
              <b>Wahh Cantt</b>
            </p>
          </center>
          <center>
            <p style={{ fontSize: "20px" }}>
              Stops to be confirmed by the tranport officer.
            </p>
          </center>
        </div>
        <div
          style={{
            width: 400,
            height: 200,
            backgroundColor: "#0B2C48",
            color: "white",
            border: "10px solid white",
            borderRadius: "30px",
          }}
        >
          <center>
            <p style={{ fontSize: "40px", marginTop: "5px" }}>
              <b>Haripur</b>
            </p>
          </center>
          <center>
            <p style={{ fontSize: "20px" }}>
              Stops to be confirmed by the tranport officer,{" "}
            </p>
          </center>
        </div>
        <div
          style={{
            width: 400,
            height: 200,
            backgroundColor: "#0B2C48",
            color: "white",
            border: "10px solid white",
            borderRadius: "30px",
          }}
        >
          <center>
            <p style={{ fontSize: "40px", marginTop: "5px" }}>
              <b>Hattar</b>
            </p>
          </center>
          <center>
            <p style={{ fontSize: "20px" }}>
              Stops to be confirmed by the tranport officer,{" "}
            </p>
          </center>
        </div>
        <div
          style={{
            width: 400,
            height: 200,
            backgroundColor: "#0B2C48",
            color: "white",
            border: "10px solid white",
            borderRadius: "30px",
          }}
        >
          <center>
            <p style={{ fontSize: "40px", marginTop: "5px" }}>
              <b>Abbottabad</b>
            </p>
          </center>
          <center>
            <p style={{ fontSize: "20px" }}>
              Stops to be confirmed by the tranport officer,{" "}
            </p>
          </center>
        </div>
        <div
          style={{
            width: 400,
            height: 200,
            backgroundColor: "#0B2C48",
            color: "white",
            border: "10px solid white",
            borderRadius: "30px",
          }}
        >
          <center>
            <p style={{ fontSize: "40px", marginTop: "5px" }}>
              <b>Taxila</b>
            </p>
          </center>
          <center>
            <p style={{ fontSize: "20px" }}>
              Stops to be confirmed by the tranport officer,{" "}
            </p>
          </center>
        </div>
      </div>
      <div class="flexbox-container2" id="second">
        <div style={{ border: "20px", paddingTop: "50px" }}>
          <img src={mainimage1} width={350} height={200} />
        </div>
        <div
          style={{
            width: 800,
            height: 200,
            border: "50px solid #0B2C48",
            paddingTop: "15px",
          }}
        >
          <p style={{ fontSize: "20px", color: "white" }}>
            A transport management system (TMS) is a software solution that
            streamlines and optimizes the processes of planning, executing, and
            monitoring transportation operations. The system can help businesses
            of all sizes improve their transportation processes, from local
            deliveries to global logistics.
          </p>
        </div>
        <div
          style={{
            width: 800,
            height: 200,
            border: "50px solid #0B2C48",
            paddingTop: "10px",
            paddingBottom: "-10px",
          }}
        >
          <p style={{ fontSize: "20px", color: "white" }}>
            A transport management system (TMS) is a software solution that
            streamlines and optimizes the processes of planning, executing, and
            monitoring transportation operations. The system can help businesses
            of all sizes improve their transportation processes, from local
            deliveries to global logistics.
          </p>
        </div>
        <div
          style={{ border: "20px", paddingTop: "30px", paddingBottom: "-10px" }}
        >
          <img src={mainimage2} width={350} height={200} />
        </div>
        <div style={{ border: "50px solid #0B2C48", paddingTop: "-10px" }}>
          <img src={mainimage3} width={350} height={200} />
        </div>
        <div
          style={{
            width: 800,
            height: 200,
            border: "50px solid #0B2C48",
            paddingTop: "10px",
          }}
        >
          <p style={{ fontSize: "20px", color: "white" }}>
            A transport management system (TMS) is a software solution that
            streamlines and optimizes the processes of planning, executing, and
            monitoring transportation operations. The system can help businesses
            of all sizes improve their transportation processes, from local
            deliveries to global logistics.
          </p>
        </div>
      </div>
      <center>
        <h2 style={{ color: "#0B2C48", paddingTop: "0px", marginTop: "100px" }}>
          Get In Touch
        </h2>
      </center>
      <div class="flexbox-container5" id="third">
        <div style={{ borderRight: "100px solid white", paddingTop: "-10px" }}>
          <img src={location} width={400} height={250} />
          <br></br>
          <p style={{ fontSize: "20px" }}>transport@paf-iast.edu.pk</p>
          <p style={{ fontSize: "20px" }}>0334-8132424</p>
        </div>
        <div class="container bg-white pb-5">
          <div class="row d-flex justify-content-start align-items-center mt-sm-5">
            <form style={{ borderLeft: "100px solid white" }}>
              <div class="d-flex flex-column pb-3">
                {" "}
                <label for="name">Name:</label>
                <br></br>
                <input
                  type="text"
                  name="email"
                  id="name"
                  class="border-bottom border-primary"
                />{" "}
              </div>
              <div class="d-flex flex-column pb-3">
                {" "}
                <label for="registrationid">Registration ID:</label>
                <br></br>
                <input
                  type="id"
                  name="regitrationid"
                  id="rid"
                  class="border-bottom border-primary"
                />{" "}
              </div>
              <div class="d-flex flex-column pb-3">
                {" "}
                <label for="contact">Contact:</label>
                <br></br>
                <input
                  type="longint"
                  name="contact"
                  id="cntc"
                  class="border-bottom border-primary"
                />{" "}
              </div>
              <div class="d-flex flex-column pb-3">
                {" "}
                <label for="message">Message:</label>
                <br></br>
                <input
                  type="text"
                  name="message"
                  id="msg"
                  class="border-bottom border-primary"
                />{" "}
              </div>
              <br></br>
              <div class="d-flex flex-column pb-3">
                {" "}
                <button>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
