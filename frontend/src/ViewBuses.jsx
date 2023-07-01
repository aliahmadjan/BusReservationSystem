import React, {useState , useEffect} from 'react'
import axios from 'axios'

export default function ViewBuses() {

const [buses , setBuses] = useState([])

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

useEffect(() =>
{
    getBuses();
} , [])
  return (
    <table className="table">
      <thead>
        <tr>
          
          <th>Bus ID</th>
          <th>No of Seats</th>
          <th>Available Seats</th>
          <th>Driver Name</th>
       
        </tr>
      </thead>
      <tbody>
        {buses.map((data, index) => {
         

          return (
            <tr key={index}>
              <td>{data.busID}</td>
              <td>{data.no_of_seats}</td>
              <td>{data.available_seats}</td>
              <td>{data.driverName}</td>
            </tr>
          );
        })}
      </tbody>
    </table>

  )
}
