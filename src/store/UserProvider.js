import UserContext from "./user-context";
import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const UserProvider = () => {
    const [user, setUser] = useState(null);

    const userSignUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .then(() => {

            })
            .catch((error) => {
                console.log(error);
            });
    };


    const userSignIn = (e) => {

    };

    const userSignOut = (e) => {

    };

    return (
        <UserContext.Provider value={{
            user: user,
            onSignUp: userSignUp,
            onSignIn: userSignIn,
            onSignOut: userSignOut,
        }}>
        </UserContext.Provider>
    )
}

export default UserProvider;


