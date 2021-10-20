import { faStar } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SingleReviews = () => {
    return (
        <div className='d-flex justify-content-center my-5'>
            <Card style={{ width: '26rem' }}>
            <Card.Title>Dr.Smith</Card.Title>
          <small>10 Years of Experience</small>
       <div className='rounded'>
       <Card.Img variant="top" src="http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/people-01.jpg" className='img-fluid' />
       </div>
        <Card.Body className='text-center'>
          <Card.Text>
            I have a 10 Years of experience.I wanna see smile on your face.
          </Card.Text>

        </Card.Body>
        <button className="btn btn-primary">Take Appointment</button>
      </Card>
        </div>
    );
};

export default SingleReviews;