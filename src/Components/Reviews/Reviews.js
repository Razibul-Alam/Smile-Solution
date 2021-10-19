import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import SingleReviews from './SingleReviews';

const Reviews = () => {
    return (
        <>
        <h2 className='text-center text-primary mt-5'>What Patient Says</h2>
        <Carousel variant="dark" className='my-5 bg-success'>
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