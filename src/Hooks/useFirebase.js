import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth, signInWithPopup,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut ,onAuthStateChanged,updateProfile } from "firebase/auth";
import {useEffect,useState } from "react";
import { firebaseConfig } from "../Firebase-Config/FirebaseConfig";
const provider = new GoogleAuthProvider();
const firebaseApp =initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const useFirebase=()=>{
  const[user,setUser]=useState([])
  const[error,setError]=useState('')
  const[isLoading,setIsLoading]=useState(true);
// google login
const logIn=()=>{
  setIsLoading(true)
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user)
      }).catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
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
         
        return {logIn,user,setUser,logOut,auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,isLoading,updateProfile,error,setError}
}
export default useFirebase;