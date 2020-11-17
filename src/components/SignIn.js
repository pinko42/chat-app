import React from 'react';
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import {useCollectionData} from "react-firebase-hooks/firestore";

const auth = firebase.auth();


const SignIn = () => {

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <button onClick={signInWithGoogle()}> signin with google</button>
    )
}

const SignOut = () => {
    return auth.currentUser && (
        <button onClick={() => auth.SignOut()}> sign out</button>
    )
}

export default SignIn
