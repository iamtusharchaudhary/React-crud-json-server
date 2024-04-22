import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'

function UserDelete() {
  const [datas,setDatas] = useState([])
  useEffect(() =>{
      axios.get("http://localhost:4000/users")
      .then(Response =>{     
          setDatas(Response.data)
      })
      
  }, []);
  const list=datas.map(data => <tr key={data.id}>
    <td>{data.id}</td>
    <td>{data.name}</td>
    <td>{data.email}</td>
    <td>{data.city}</td>
    
    <td><Link style={{textDecoration:'none',border:'2px solid black',backgroundColor:'black',color:'white',padding:'4% 5%'}} to={data.id}>Delete</Link></td>
</tr>);

  return (
    <div>
      <div>
        <h1>Welcome View Data</h1>
        <hr/>
        <br/>
        <table border='1' cellPadding='13' cellSpacing='16'>
          <thead>
            <tr>
                <th>FIRST NAME</th>
                <th>LAST NAME</th>
                <th>EMAIL</th>
                <th>PASSWORD</th>
                <th>Delete</th>
              
            </tr>
            </thead>
            <thead>
            {
              list
                
            }
            </thead>
        </table>
    </div>
    </div>
  )
}
export default UserDelete
