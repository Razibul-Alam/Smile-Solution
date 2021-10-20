import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const SingleService= ({service}) => {
    const{name,img,id,desc}=service;
    return (
      <Col >
      <Card className='my-card shadow'>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
           {desc}
          </Card.Text>
          <Link to ={`/service/${id}`}><Button variant="primary">Details</Button></Link>
        </Card.Body>
         
      </Card>
    </Col>
    );
};

export default SingleService;