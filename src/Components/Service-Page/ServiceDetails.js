import React from 'react';
import { useParams } from 'react-router';
import dentalServices from '../../FakeData/FakeData.json'
import { Card } from 'react-bootstrap';

const ServiceDetails = () => {
    const{servicekey}=useParams()
    const singleDetails=dentalServices.find(service=>service.id==servicekey)
    
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