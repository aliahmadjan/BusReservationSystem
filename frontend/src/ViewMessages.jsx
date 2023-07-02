import React, { useState, useEffect } from 'react';
import logo from "./silverLogo.png";
import { useNavigate } from 'react-router-dom';
import background from "./login_signup_background.png";
import './ViewMessages.css';
import axios from 'axios';
import Sidebar from './sidebar';


const ViewMessages = () => {
  const [messages, setMessages] = useState([]);

  const getMessages = () => {
    axios.get('http://127.0.0.1:5000/admin/getmessages')
      .then((res) => {
        console.log(res.data);
        setMessages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div className="container">

  
          <Sidebar />
       
    
    
    <table className="table">
      <div>
        
      <thead>
        <tr>
          <th>Registration ID</th>
          <th>Full Name</th>
          <th>Contact</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        {messages.map((data, index) => {
          

          return (
            <tr key={index}>
              <td>{data.regID}</td>
              <td>{data.name}</td>
              <td>{data.contact}</td>
              <td>{data.message}</td>
           
              {/* <td>
                <button className='button-1'>Accept</button>
              </td>
              <td>
                <button className='button-1'>Reject</button>
              </td> */}
            </tr>
          );
        })}
      </tbody>
   </div>
    </table>
    </div>
  );
};

export default ViewMessages;
