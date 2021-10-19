import React, { useContext, useState,useEffect } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import SingleService from './SingleService';


const Services = () => {
    const[dentalServices,setDentalServices]=useState([])
    useEffect(()=>{
        fetch('./FakeData.JSON')
        .then(res=>res.json())
        .then(data=>setDentalServices(data))
          },[])
    return (
        <>
        <h2 className='text-center text-danger mt-5'>Our Services</h2>
        <hr className='m-auto text-primary w-25' />
        <div className='row g-4 mt-3'>
       {dentalServices.map(service=><SingleService key={service.id} service={service}/>)}
       </div>
        </>
    );
};

export default Services;