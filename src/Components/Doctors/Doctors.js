import React from 'react';
import AllQuestionAndAns from './../Question&Ans/AllQuestionAndAns';
import MyDoctors from '../AllDoctors/MyDoctors';

const Doctors = () => {
    return (
        <div>
            <MyDoctors/>
            <AllQuestionAndAns/>
        </div>
    );
};

export default Doctors;