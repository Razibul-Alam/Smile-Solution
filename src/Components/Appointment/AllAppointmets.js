import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import Appointment from './Appointment';

const AllAppointments= () => {
    const [info,setInfo]=useState([{date:'19-10-2021',name:'mark',email:'mark1232@gmail.com',service:'Extraction'}])
    return (
      <>
    <Appointment info={info} setInfo={setInfo}/>
    <hr />
    <h3 className='text-center mt-4 text-danger'> Total appointment {info.length}</h3>
        <div className='container'>
        <Table striped bordered hover size="sm" className="mt-3">
  <thead>
    <tr>
      <th>date</th>
      <th>Name</th>
      <th>Email</th>
      <th>service</th>

    </tr>
  </thead>
  <tbody>
   {info.map(info=>{
     const{date,name,email,service}=info
     return(
      <tr>
      <td>{date}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{service}
      </td>
    </tr>
     )
   })}
  </tbody>
</Table>
        </div>
</>
    );
};

export default AllAppointments;