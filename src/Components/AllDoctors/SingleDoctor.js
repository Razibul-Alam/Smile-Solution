
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleDoctor = () => {
    return (
        <div className='d-flex justify-content-center my-5'>
            <Card style={{ width: '28rem' }}>
            <Card.Title>Dr.Smith</Card.Title>
          <small>Expert</small>
       <div className='rounded'>
       <Card.Img variant="top" src="http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/people-01.jpg" className='img-fluid' />
       </div>
        <Card.Body className='text-center'>
          <Card.Text>
            I have a 10 Years of experience.I wanna see smile on your face.
          </Card.Text>

        </Card.Body>
        <Link to ="/appointment" className='m-auto'><button className="btn btn-primary m-auto mb-3">Take Appointment</button></Link>
      </Card>
        </div>
    );
};

export default SingleDoctor;