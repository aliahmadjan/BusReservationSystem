import React, {useState , useEffect} from 'react'
import axios from 'axios'
import Sidebar from './sidebar'
import './ViewDrivers.css'

export default function ViewDrivers() {

const [drivers , setDrivers] = useState([])

const getDrivers = () =>
{
    axios.get('http://127.0.0.1:5000/admin/getdrivers').then((res) =>
    {
        setDrivers(res.data)
    }).catch((err) =>
    {
        console.log(err);
    })
}

useEffect(() =>
{
    getDrivers();
} , [])
  return (
    <div className='container'>
      <Sidebar/>
   
    <table className="table">
      <thead>
        <tr>
          
          <th>Driver Name</th>
          <th>CNIC</th>
          <th>License No</th>
          <th>Driver Status</th>
       
        </tr>
      </thead>
      <tbody>
        {drivers.map((data, index) => {
         

          return (
            <tr key={index}>
              <td>{data.driverName}</td>
              <td>{data.cnic}</td>
              <td>{data.license_no}</td>
              <td>{data.driver_status}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>

  )
}
