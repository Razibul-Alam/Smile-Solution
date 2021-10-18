import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth, signInWithPopup,GithubAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut ,onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect } from "react";
import { AuthContext } from "./App";
import { firebaseConfig } from "./Firebase-Config/FirebaseConfig";

const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const firebaseApp =initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const useFirebase=()=>{
    const[user,setUser]=useContext(AuthContext)
// google login
const logIn=()=>{
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user)
        setUser(user)
      }).catch((error) => {
        const errorMessage = error.message;
      });
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
      onAuthStateChanged(auth, (user) => {
        if (user) {
         setUser(user)
        } else {
          // User is signed out
          // ...
        }
      });
     },[])
        // ----
        // logout method
const logOut=()=>{
  signOut(auth).then(() => {
    setUser({})
  }).catch((error) => {
    
  });
}
         
        return {logIn,user,githubLogin,logOut,auth,createUserWithEmailAndPassword,signInWithEmailAndPassword}
}
export default useFirebase;