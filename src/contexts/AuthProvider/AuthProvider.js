import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut, signInWithEmailAndPassword, updateProfile, sendEmailVerification } from 'firebase/auth';
import app from './../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const providerLogin = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser , profile)
    }

    const verifyEmail = ()=>{
        return sendEmailVerification(auth.currentUser);
    }

    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log('user inside state change', currentUser);
            if(currentUser === null || currentUser.emailVerified){
                setUser(currentUser);
            }
            setLoading(false);
        });

        return () =>{
            unsubscribe();
        }

    }, [])

    const authInfo = {
        user,
        loading,
        setLoading,
        verifyEmail,
        updateUserProfile, 
        providerLogin,
        logOut, 
        createUser,
        signIn};

    return (
        <AuthContext.Provider value={ authInfo }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;