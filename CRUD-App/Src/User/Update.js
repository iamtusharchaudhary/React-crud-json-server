import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function UserUpdate() {
  const[data1, setdata1]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:4000/users")
    .then(res=>{
      console.log(res.data)
      setdata1(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  })
  const tata=data1.map(data => <tr key={data.id}>
    <td>{data.id}</td>
    <td>{data.name}</td>
    <td>{data.email}</td>
    <td>{data.city}</td>
    <td><Link style={{padding:"2% 6%",textDecoration:"none"}} to={data.id}>Update Now</Link></td>
  </tr>)
  return (
    <>
    <div>
      <h1>Welcome User Upadte</h1>
      <div style={{marginTop:"20px"}}>
      <table border="2" width="100%" height="200px" cellSpacing="10px">
        {
          tata
        }
      </table>
      </div>
      </div>
  </>
  )
}
export default UserUpdate
