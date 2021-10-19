import React,{useState,useEffect} from 'react';
import BuisinessPolicy from './BuisinessPolicy';

const BuisinessPolicies = () => {
    const[policies,setPolicies]=useState([])
    useEffect(()=>{
fetch('./buisinessPolicy.json')
.then(res=>res.json())
.then(data=>setPolicies(data))
    },[])
    return (
        <section className="row justify-content-center mt-5">
         {policies?.map(policy=><BuisinessPolicy key={policy.id} policy={policy}/>)}   
        </section>
    );
};

export default BuisinessPolicies;