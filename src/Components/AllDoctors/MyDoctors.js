import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import SingleDoctor from './SingleDoctor';

const MyDoctors = () => {
    return (
        <>
        <h2 className='text-center text-primary mt-5'>Meet Your Doctor</h2>
        <Carousel variant="dark" className='my-5 bg-dark'>
  <Carousel.Item>
  <SingleDoctor/>
  </Carousel.Item>
  <Carousel.Item>
  <SingleDoctor/>
  </Carousel.Item>
  <Carousel.Item>
  <SingleDoctor/>
  </Carousel.Item>
</Carousel>
</>
    );
};

export default MyDoctors;