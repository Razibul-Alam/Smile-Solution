import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth, signInWithPopup,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut ,onAuthStateChanged,updateProfile } from "firebase/auth";
import {useEffect,useState } from "react";
import { firebaseConfig } from "../Firebase-Config/FirebaseConfig";
import {useHistory} from 'react-router-dom'

const provider = new GoogleAuthProvider();
const firebaseApp =initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const useFirebase=()=>{
  const[user,setUser]=useState([])
  const[isLoading,setIsLoading]=useState(true);
// google login
const history=useHistory()
const logIn=()=>{
  
  setIsLoading(true)
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user)
        setUser(user)
        history.push('/')
      }).catch((error) => {
        const errorMessage = error.message;
      })
      .finally(()=>setIsLoading(false))
      
        }
        

    //   auth identity
     useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
         setUser(user)
        } else {
          // User is signed out
          // ...
        }
        setIsLoading(false)
      });
     
     },[])
        // ----
        // logout method
const logOut=()=>{
  setIsLoading(true)
  signOut(auth).then(() => {
    setUser({})
  }).catch((error) => {
    
  }).finally(()=>setIsLoading(false))
  
}
         
        return {logIn,user,setUser,logOut,auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,isLoading,updateProfile}
}
export default useFirebase;