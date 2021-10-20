import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import SingleReviews from './SingleReviews';

const Reviews = () => {
    return (
        <>
        <h2 className='text-center text-primary mt-5'>Meet Your Doctor</h2>
        <Carousel variant="dark" className='my-5 bg-dark'>
  <Carousel.Item>
  <SingleReviews/>
  </Carousel.Item>
  <Carousel.Item>
  <SingleReviews/>
  </Carousel.Item>
  <Carousel.Item>
  <SingleReviews/>
  </Carousel.Item>
</Carousel>
</>
    );
};

export default Reviews;