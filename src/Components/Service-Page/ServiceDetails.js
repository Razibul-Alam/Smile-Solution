import React, { useState,useEffect  } from 'react';
import { useParams } from 'react-router';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const ServiceDetails = () => {
const[services,setServices]=useState([])
useEffect(()=>{
  fetch('../FakeData.JSON')
  .then(res=>res.json())
  .then(data=>setServices(data))
    },[])
    const{servicekey}=useParams()
    const singleDetails=services?.find(service=>service.id==servicekey)
    return (
        <div className='row justify-content-center align-items-center mt-5'>   
        <Card className='col-lg-4'>
          <Card.Img variant="top" src={singleDetails?.img} />
          <Card.Body>
            <Card.Title>{singleDetails?.name}</Card.Title>
            <p>{singleDetails?.desc}</p>
            <Link to ="/appointment"><Button variant="primary">Appointment</Button></Link>
          </Card.Body>
        </Card>
        </div>
    );
};

export default ServiceDetails;