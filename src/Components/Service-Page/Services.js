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
        <div className='row'>
       {dentalServices.map(service=><SingleService key={service.id} service={service}/>)}
       </div>
        </>
    );
};

export default Services;