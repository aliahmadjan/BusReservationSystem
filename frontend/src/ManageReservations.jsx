import React, { useState, useEffect } from 'react';
import logo from "./silverLogo.png";
import { useNavigate } from 'react-router-dom';
import background from "./login_signup_background.png";
import './ManageReservations.css';
import axios from 'axios';
import Sidebar from './sidebar'

const ManageReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [results , setResults] = useState([]);
  const [name , setName] = useState("")
  const [ updateState , setUpdateState] = useState(false);
  const [ successMessage , setSuccessMessage] = useState("");
  const [errorMessage , setErrorMessage] = useState("")


 const getReservations = () =>
 {
  axios.get('http://127.0.0.1:5000/admin/getreservations')
  .then((res) => {
    //console.log(res.data);
    setReservations(res.data);
    setResults(res.data);
  })
  .catch((err) => {
    console.log(err);
  });
 }
 useEffect(() => 
 {
   getReservations();
 },[])



 const handleChangeState = () =>
 {
  setUpdateState(!updateState);
 }

  return (
    <div className="container">
          <Sidebar />
          
      
    <table className="table">
      <thead>
        <tr>
          <th>University ID</th>
          <th>Full Name</th>
          <th>Route</th>
          <th>Contact</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>No of Seats</th>
          <th>Emergency Contact</th>
          <th>Reservation Type</th>
        </tr>
      </thead>
      <tbody>
        {results.map((data, index) => {
          const { startdate, enddate, name , no_of_seats} = data;


          const handleSubmitAccept = (reservation_acceptid) => {
        
              
              localStorage.removeItem('reservation_acceptid');
              localStorage.setItem('reservation_acceptid', reservation_acceptid);
           
          }

          const acceptReservation = () => {
            //e.preventDefault();
            //console.log(localStorage.getItem('reservation_acceptid'))
            const reservationId = localStorage.getItem('reservation_acceptid')
            console.log(reservationId)
            axios.delete(`http://127.0.0.1:5000/admin/acceptreservation/${reservationId}`).then(() =>
            {
             const updatedReservations = reservations.filter(res => res._id !== reservationId);
             setReservations(updatedReservations);
          
             setResults(updatedReservations);
            })
            .catch((err)=>
            {
             console.log(err)
            })
         }


          const generateReceipt = () => {
            axios
              .post('http://127.0.0.1:5000/admin/generatereceipt', {
                name : name ,
                services: { startdate, enddate },
                seats: no_of_seats,
                amount: 80000
              })
              .then((res) => {
                // Handle success
              })
              .catch((err) => {
                // Handle error
              });
          };

          

          return (
            <tr key={index}>
              <td>{data.uniID}</td>
              <td>{data.name}</td>
              <td>{data.destination}</td>
              <td>{data.contact}</td>
              <td>{startdate}</td>
              <td>{enddate}</td>
              <td>{data.no_of_seats}</td>
              <td>{data.emergency_contact}</td>
              <td>{data.reservation_type}</td>
              
              <td>
                <button className='button-1' onClick={(e) => {
                
                 generateReceipt()
                handleSubmitAccept(data.id)
                acceptReservation() 
                setSuccessMessage("Reservation Has Been Accepted!")
                }}>Accept</button>
              </td>
              <td>
                <button className='button-1'
                onClick={(e) => {

                 handleSubmitAccept(data.id)
                 acceptReservation() 
                 setErrorMessage("Reservation Has Been Rejected!")
                 }}
                >Reject</button>
              </td>
            </tr>
          );
        })}
       
      </tbody>
      {successMessage && <div className='success'>{successMessage}</div>}
      {errorMessage && <div className='error'>{errorMessage}</div>}
      
    </table>

    
    </div>
   
  );
};

export default ManageReservations;
