import React, { useState,useEffect } from 'react';
import SingleFeedback from './SingleFeedback';

const AllFeedback = () => {
    const[feedbacks,setFeedbacks]=useState([])
    useEffect(()=>{
        fetch('./Feedback.json')
        .then(res=>res.json())
        .then(data=>setFeedbacks(data))
          },[])
    return (
        <>
        <h2 className='text-center my-5'>What patient says</h2>
        <div className='container'>
            {feedbacks?.map(feedback=><SingleFeedback key={feedback.id} feedback={feedback} />)}
        </div>
        </>
    );
};

export default AllFeedback;