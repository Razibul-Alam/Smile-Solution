import React from 'react';
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <main style={{height:'500px'}} className="row d-flex align-items-center bg-dark text-light">
            <div className="col-md-4 offset-md-1">
                <h1 className='text-primary'>Your New Smile <br/> Starts Here</h1>
                <p className="text-light">
                    This is your one stop solution. WE can cure your pain and makeyou feel happy. We want to see your face smile
                </p>
                <Link to ="/appointment"><button className="btn btn-primary">GET APPOINTMENT</button></Link>
            </div>
            <div className="col-md-6">
                <img src='https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/f1.jpg?id=8424' alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default Banner;