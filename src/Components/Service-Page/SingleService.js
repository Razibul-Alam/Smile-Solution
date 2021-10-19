import React from 'react';
import { Card, CardGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const SingleService= ({service}) => {
    const{name,img,id}=service;
    return (
        <div className='col-lg-4'>
             <CardGroup>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Link to ={`/service/${id}`}><Button variant="primary">Details</Button></Link>
          </Card.Body>
        </Card>
      </CardGroup>
        </div>
    );
};

export default SingleService;