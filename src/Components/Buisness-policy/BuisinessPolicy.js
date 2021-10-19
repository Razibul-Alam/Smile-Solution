import React from 'react';

const BuisinessPolicy = ({policy}) => {
    const{title,img,desc}=policy;
    return (
       
        <div className="card1 col-md-3 bg-primary rounded mx-4">
            <div className='d-flex w-75 align-items-center '>
                <div>
                    <img className='img-fluid' src={img} alt="" />
                </div>
           <div className='text-center ms-3'>
           <h6>{title}</h6>
            <small>{desc}</small>
           </div>
            </div>
        </div>
    );
};

export default BuisinessPolicy;