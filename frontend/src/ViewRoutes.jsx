import React, {useState , useEffect} from 'react'
import axios from 'axios'
import Sidebar from './sidebar'
import './ViewRoutes.css'

export default function ViewRoutes() {

const [routes , setRoutes] = useState([])

const getRoutes = () =>
{
    axios.get('http://127.0.0.1:5000/admin/getroutes').then((res) =>
    {
        setRoutes(res.data)
    }).catch((err) =>
    {
        console.log(err);
    })
}

useEffect(() =>
{
    getRoutes();
} , [])
  return (
    <div className='container'>

    <Sidebar/>
    <table className="table">
      <thead>
        <tr>
          <th>Bus ID</th>
          <th>Driver Name</th>
          <th>Route</th>
          <th>Stops</th>
       
        </tr>
      </thead>
      <tbody>
        {routes.map((data, index) => {
         

          return (
            <tr key={index}>
              <td>{data.busID}</td>
              <td>{data.driverName}</td>
              <td>{data.route}</td>
              <td>{data.stops}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>

  )
}
