import React, {useState,useEffect } from 'react';
import {Row } from 'react-bootstrap';
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
        <div className='my-5'>
        <h2 className='text-center text-success'>Services</h2>
        <hr className='m-auto text-primary w-25'/>
        </div>
        <Row xs={1} md={3} className="g-4">
       {dentalServices?.map(service=><SingleService key={service.id} service={service}/>)}
       </Row>
        </>
    );
};

export default Services;