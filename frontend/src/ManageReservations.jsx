import React, { useState, useEffect } from 'react';
import logo from "./silverLogo.png";
import { useNavigate } from 'react-router-dom';
import background from "./login_signup_background.png";
import './ManageReservations.css';
import axios from 'axios';

const ManageReservations = () => {
  const [reservations, setReservations] = useState([]);

  const getReservations = () => {
    axios.get('http://127.0.0.1:5000/admin/getreservations')
      .then((res) => {
        console.log(res.data);
        setReservations(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getReservations();
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>University ID</th>
          <th>Full Name</th>
          <th>Destination</th>
          <th>Contact</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Emergency Contact</th>
          <th>Reservation Type</th>
        </tr>
      </thead>
      <tbody>
        {reservations.map((data, index) => {
          const { startdate, enddate } = data;

          const generateReceipt = () => {
            axios
              .post('http://127.0.0.1:5000/admin/generatereceipt', {
                services: { startdate, enddate },
                seats: 1,
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
              <td>{data.emergency_contact}</td>
              <td>{data.reservation_type}</td>
              <td>
                <button onClick={generateReceipt}>Accept</button>
              </td>
              <td>
                <button>Reject</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ManageReservations;
