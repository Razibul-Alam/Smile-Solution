import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import useAuth from './../../Hooks/useAuth';
const Appointment = ({info,setInfo}) => {
    const{user}=useAuth()
    const[date,setDate]=useState(null)
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [service,setService]=useState('')
    
    const infoDetails={
        date:date,name:name,email:email,service:service
    }
   
    const getDate=(e)=>{
setDate(e.target.value)
    }
    const getName=(e)=>{
setName(e.target.value)
    }
    const getEmail=(e)=>{
setEmail(e.target.value)
    }
    const getService=(e)=>{
setService(e.target.value)
    }
    const handleSubmit=()=>{
      if (name&&date&&email&&service) {
        setInfo([...info,infoDetails]) 
      }else{
          alert('give input')
      }
    }
    return (
        <>
      <div className="my-5 d-flex justify-content-center row">
      <h2 className="text-primary text-center">Create Appointment</h2>
      <div className="col-lg-6 col-md-6 col-sm-8 mx-2 " >
        <Form className="mt-4 shadow p-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" onBlur={getDate} placeholder={new Date().toLocaleDateString()} required="required" />
          <Form.Control type="Text" className='mt-3' onBlur={getName} placeholder={user?.displayName}required="required" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="Text" onBlur={getEmail}  placeholder={user?.email } required="required" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="text" onBlur={getService}  placeholder="service" required="required"  />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit} className="form-control">
          Submit
        </Button>
      </Form>
      </div>
      </div>
      </>
    );
};

export default Appointment;