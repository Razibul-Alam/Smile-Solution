import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faYoutubeSquare,faTwitterSquare,faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="row justify-content-between my-footer align-items-center mt-5 text-center bg-light">
        <div className="col-lg-4 mb-2">
          <h5>Our Services</h5>
          <hr className='w-50 m-auto'/>
         <Link to='/'><p>Filling</p></Link>
         <Link to='/'><p>Extraction</p></Link>
         <Link to='/'><p>Scalling</p></Link> 
        </div>
        <div className="col-lg-4">
          <h5>Smile Solutions</h5>
          <p>Email:Smilesolution@gmail.com</p>
          <p>Dhaka, bangladesh</p>
        </div>
        <div className="col-lg-4 mb-2">
          <span className="fs-2 mx-2"><FontAwesomeIcon icon={faFacebook} /></span>
          <span className="fs-2 mx-2"><FontAwesomeIcon icon={faGithubSquare} /></span>
          <span className="fs-2 mx-2"><FontAwesomeIcon icon={faYoutubeSquare} /></span>
          <span className="fs-2 mx-2"><FontAwesomeIcon icon={faTwitterSquare} /></span>
          <p>Smile Solution<span className="fs-6"><FontAwesomeIcon icon={faCopyright}/></span> AllRight reserve</p>
        </div>
      </footer>
    );
};

export default Footer;