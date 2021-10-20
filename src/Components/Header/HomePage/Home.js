import React from 'react';
import Services from '../../Service-Page/Services';
import Banner from './../../Banner-Section/Banner';
import BuisinessPolicies from '../../Buisness-policy/BuisinessPolicies';
import AllFeedback from '../../Feedback-Page/AllFeedback';



const Home = () => {
    console.log('hello')
    
    return (
        <>
        <Banner/>
        <BuisinessPolicies/>
        <Services/>
        <AllFeedback/>
        </>
    );
};

export default Home;