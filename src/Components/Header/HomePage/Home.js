import React from 'react';
import Services from '../../Service-Page/Services';
import Banner from './../../Banner-Section/Banner';
import Footer from './../../Footer-Section/Footer';
import { useEffect } from 'react';


const Home = () => {
    console.log('hello')
    
    return (
        <>
        <Banner/>
        <Services/>
        <Footer/>
        </>
    );
};

export default Home;