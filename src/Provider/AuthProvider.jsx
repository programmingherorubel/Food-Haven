import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebaseInit'
import { toast } from 'react-hot-toast';



export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState('')
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    
    
     // Register 
     const registerUser = (email,password,username,userUrl) =>{
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                updateProfile(auth.currentUser, {
                    displayName: username,
                    photoURL: userUrl
                  }).then(() => {
                  }).catch((error) => {
                  });
                setUser(user)
                
                toast.success('Success fully  Register')

            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage)  
            });
     }
    // Login User 
     const loginUser = (email,password) =>{
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user)
                toast.success('Successfully Login Complete');
                    setLoading(false)
            })
            .catch((error) => {
                setLoading(true)
                const errorMessage = error.message;
                 toast.error(errorMessage)
                setLoading(false)
            });
    }

     // onAuthChange 
     useEffect(()=>{
        setLoading(true)
        const unSubscribe =  onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
          });
        return ()=>{
           return  unSubscribe()
        }
    },[])

     // sing out 
     const logout = ()=>{
        signOut(auth).then(() => {
            toast.success('Successfully Singout ');
          }).catch((error) => {
          });
    }

      // google Sing in 
      const googleSingIn = ()=>{
        setLoading(true)
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            setUser(user)
            setLoading(false)
        }).catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
        });
    }
      // Github Sing in 
      const githubSingin = ()=>{
        setLoading(true)
        signInWithPopup(auth, githubProvider)
        .then((result) => {
            const user = result.user;
            setUser(user)
            setLoading(false)
        }).catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
        });
    }


 

    const inforamtion = {
        user,
        loading,
        error ,
        registerUser,
        loginUser,
        logout,
        googleSingIn,
        githubSingin
    }
    return (
        <AuthContext.Provider value={inforamtion}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;