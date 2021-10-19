import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth, signInWithPopup,GithubAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut ,onAuthStateChanged,updateProfile } from "firebase/auth";
import {useEffect,useState } from "react";
import { firebaseConfig } from "../Firebase-Config/FirebaseConfig";

const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const firebaseApp =initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const useFirebase=()=>{
  const[user,setUser]=useState([])
  const[isLoading,setIsLoading]=useState(true);
// google login
const logIn=()=>{
  setIsLoading(true)
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user)
        setUser(user)
      }).catch((error) => {
        const errorMessage = error.message;
      })
      .finally(()=>setIsLoading(false))
      
        }
        
         // github login
    const githubLogin=()=>{
        signInWithPopup(auth, githubProvider)
    .then((result) => {
      const user = result.user;
      console.log(user)
    })
      }
    //   auth identity
     useEffect(()=>{
      const unsubscrived=onAuthStateChanged(auth, (user) => {
        if (user) {
         setUser(user)
        } else {
          // User is signed out
          // ...
        }
        setIsLoading(false)
      });
      return ()=>unsubscrived;
      
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
         
        return {logIn,user,setUser,githubLogin,logOut,auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,isLoading,updateProfile}
}
export default useFirebase;