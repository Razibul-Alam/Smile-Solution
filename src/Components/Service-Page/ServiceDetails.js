import React, { useState,useEffect  } from 'react';
import { useParams } from 'react-router';
import { Card } from 'react-bootstrap';
const ServiceDetails = () => {
const[services,setServices]=useState([])
useEffect(()=>{
  fetch('../FakeData.JSON')
  .then(res=>res.json())
  .then(data=>setServices(data))
    },[])
  
console.log(services)
    const{servicekey}=useParams()
    const singleDetails=services?.find(service=>service.id==servicekey)
    return (
        <div className='row justify-content-center align-items-center mt-5'>   
        <Card className='col-lg-4'>
          <Card.Img variant="top" src={singleDetails?.img} />
          <Card.Body>
            <Card.Title>{singleDetails?.name}</Card.Title>
          </Card.Body>
        </Card>
        </div>
    );
};

export default ServiceDetails;