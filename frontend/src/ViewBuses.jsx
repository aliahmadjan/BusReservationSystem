import React, {useState , useEffect} from 'react'
import axios from 'axios'
import Sidebar from './sidebar'
import './ViewBuses.css'
export default function ViewBuses() {

const [buses , setBuses] = useState([])
//const [available_seats , setAvailableSeats] = useState("")
const [availableSeats , setAvailableSeats] = useState([])

const getBuses = () =>
{
    axios.get('http://127.0.0.1:5000/admin/getbuses').then((res) =>
    {
        setBuses(res.data)
    }).catch((err) =>
    {
        console.log(err);
    })

  }

  const getAvailableSeats = () =>
  {
    axios.get('http://127.0.0.1:5000/admin/getsameroute').then((res) =>
    {
      console.log(res.data)
      // setAvailableSeats(res.data.available_seats)
       setAvailableSeats(res.data)
    }).catch((err) =>
    {
        console.log(err);
    })

  }
   


useEffect(() =>
{
    getBuses();
    getAvailableSeats();
} , [])


  return (
    <div className='container'>
      <Sidebar/>
    <table className="table">
      <thead>
        <tr>
          
          <th>Bus ID</th>
          <th>No of Seats</th>
          <th>Available Seats</th>
          <th>Driver Name</th>
          <th>Route</th>
       
        </tr>
      </thead>
      <tbody>
       
{buses.map((data, index) => {
  return (
    <tr key={index}>
      <td>{data.busID}</td>
      <td>{data.no_of_seats}</td>
      <td>{availableSeats[index]}</td>
      <td>{data.driverName}</td>
      <td>{data.route}</td>
      
    </tr>
  );
})}


      </tbody>
    </table>
    </div>

  )
}
