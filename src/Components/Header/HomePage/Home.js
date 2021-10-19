import React from 'react';
import Services from '../../Service-Page/Services';
import Banner from './../../Banner-Section/Banner';
import Footer from './../../Footer-Section/Footer';
import { useEffect } from 'react';
import Reviews from '../../Reviews/Reviews';
import BuisinessPolicies from '../../Buisness-policy/BuisinessPolicies';



const Home = () => {
    console.log('hello')
    
    return (
        <>
        <Banner/>
        <BuisinessPolicies/>
        <Services/>
        <Reviews/>
        <Footer/>
        </>
    );
};

export default Home;