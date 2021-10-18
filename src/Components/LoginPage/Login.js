import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import useFirebase from '../../useFirebase';

const Login = () => {
  // google login 
  const {logIn,user,githubLogin,logOut,auth,createUserWithEmailAndPassword,signInWithEmailAndPassword}=useFirebase();
  console.log(user.email)
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  // get email
  const getEmail=(e)=>{
setEmail(e.target.value)
  }
  // get password
  const getPassword=(e)=>{
setPassword(e.target.value)
  }

    //  create account email and password
    const createAccount=(e)=>{
      e.preventDefault()
      createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
  })
    }
    // sign in with email and poassword
    const signInAccount=(e)=>{
      e.preventDefault()
      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
  })

    }


    return (
      <>
      {user?.email?<p>{user.email}</p>:''}
        <div className='text-center'>
          {user?.email?<Button onClick={logOut}>Logout</Button> :
          <Button onClick={logIn}>Login</Button> }
          <Button onClick={githubLogin}>Github</Button> 
          <div>
            <Form onSubmit={createAccount}>
              <input type="email" name="" id="" onBlur={getEmail}/>
              <input type="password" name="" id="" onBlur={getPassword} />
              <Button type='submit'>Submit</Button>
            </Form>
          </div>
          <div>
            <Form onSubmit={signInAccount}>
              <input type="email" name="" id="" onBlur={getEmail}/>
              <input type="password" name="" id="" onBlur={getPassword} />
              <Button type='submit'>SignIn</Button>
            </Form>
          </div>
        </div>
        </>
    );
};

export default Login;