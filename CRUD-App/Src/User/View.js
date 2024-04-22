import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function UserView() {
    const[datas, setDatas]=useState([])

    useEffect(() => {
        axios.get(" http://localhost:4000/users")
            .then(res => {
                console.log(res)
                setDatas(res.data)
            })
            .catch(err => {
            console.log(err)
        })
    },[])
    const views=datas.map(data=><tr key={data.id}>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.city}</td>
        <td><Link style={{textDecoration:"none"}} to={data.id}>View Now</Link></td>
    </tr>)
  return (

    <div className='form'>
         <h1>View User Data</h1>
         <br/>
         <table border= "1" width= "100%" height="200px">
            {
               views
            }
         </table>
        </div>
  )
}
export default UserView
