import { faStar } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SingleReviews = () => {
    return (
       
        <div className='d-flex justify-content-center my-5'>
            <Card style={{ width: '26rem' }}>
       <div className='rounded'>
       <Card.Img variant="top" src="http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/people-01.jpg" className='img-fluid' />
       </div>
        <Card.Body className='text-center'>
          <Card.Title>Mr.Smith</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <div>
          <span className="fs-4 mx-2"><FontAwesomeIcon icon={faStar} /></span>
          <span className="fs-4 mx-2"><FontAwesomeIcon icon={faStar} /></span>
          <span className="fs-4 mx-2"><FontAwesomeIcon icon={faStar} /></span>
          <span className="fs-4 mx-2"><FontAwesomeIcon icon={faStar} /></span>
          <span className="fs-4 mx-2"><FontAwesomeIcon icon={faStar} /></span>
          </div>
        </Card.Body>
      </Card>
        </div>
    );
};

export default SingleReviews;