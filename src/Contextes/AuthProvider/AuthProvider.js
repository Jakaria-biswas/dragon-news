import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../Firebase/Firebase.config';


export const AuthContext = createContext();


const auth = getAuth(app)
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    /// create brand new user through google sign in 
    const googleSignIn = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    /// create new user email, and password

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    /// login user

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    /// log out user 
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }


    /// update profile 


    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    /// verify user email 

    const emailVerify = () => {
        return sendEmailVerification(auth.currentUser)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            if ( currentUser === null ||currentUser?.emailVerified) {
                setUser(currentUser)
            }
            setLoading(false)
        });

        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        googleSignIn,
        user,
        updateUserProfile,
        logOut,
        createUser,
        loginUser,
        loading,
        emailVerify
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;