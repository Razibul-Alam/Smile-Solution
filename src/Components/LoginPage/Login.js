import React, { useContext, useState } from 'react';
import { Button, Form, NavLink } from 'react-bootstrap';
import useFirebase from '../../Hooks/useFirebase';
import {useHistory} from 'react-router-dom'
import useAuth from './../../Hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


const Login = () => {
  const[show,setShow]=useState(false);
  const history=useHistory()
  const {logIn,user,setUser,githubLogin,logOut,auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile}=useAuth();
  
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[name,setName]=useState('')
 
  
 

  // get name
  const getName=(e)=>{
setName(e.target.value)
  }
  // get email
  const getEmail=(e)=>{
setEmail(e.target.value)
  }
  // get password
  const getPassword=(e)=>{
setPassword(e.target.value)
  }

  // setUser profile
  const setUserProfile=()=>{
    updateProfile(auth.currentUser, {
      displayName: name,
    }).then(() => {
      // Profile updated!
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });
    }

//  create account email and password
const createAccount=(e)=>{
  e.preventDefault()
  createUserWithEmailAndPassword(auth,email,password)
.then((userCredential) => {
  setUserProfile()
})
}



    
    // sign in with email and poassword
    const signInAccount=(e)=>{
      e.preventDefault()
      signInWithEmailAndPassword(auth,email,password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
    history.push('/')
    
  })

    }


    return (
      <>
      {user?.email?<p>{user.email}</p>:''}
      <div className="mt-5 d-flex justify-content-center row">
      <div className="col-lg-6 col-md-6 col-sm-8 mx-2" >
      
          
         { !show?<div>
            <Form onSubmit={createAccount}>
            <Form.Control  type="text" placeholder="Name" onBlur={getName} />
  <br />
  <Form.Control type="email" placeholder="Email" onBlur={getEmail}  />
  <br />
  <Form.Control type="password" placeholder="Password" onBlur={getPassword} />
  <Button className='form-control mt-3' type='submit'>Register</Button>
  
            </Form>
           <div className='text-center mt-2'>
           <span> Already have an Account ?</span> <span className='text-danger' onClick={()=>setShow(true)}> SignIn</span>
           </div>
          </div>:
          <div>
            <Form onSubmit={signInAccount}>
  <Form.Control type="email" placeholder="Email" onBlur={getEmail} />
  <br />
  <Form.Control size="sm" type="password" placeholder="Password" onBlur={getPassword}  />
  <Button className='form-control mt-3' type='submit'>Login</Button>
            </Form>
            
          </div>}
          <Button variant="primary" 
   className="form-control mt-3" onClick = {logIn}>
    <span className="text-danger fs-4 me-2"><FontAwesomeIcon icon={faGoogle} /></span>Login With Google
  </Button>
        </div>
        </div>
        


        </>
    );
};

export default Login;