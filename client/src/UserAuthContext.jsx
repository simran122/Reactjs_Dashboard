import React from 'react'
import { createContext, useContext, useState, useEffect } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from './firebase'
const UserAuthContext = createContext();

function UserAuthContextProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState("")
    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }
    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }

        return () => {
            unsubscribe();
        }
    }, []);


    useEffect(() => {
        // Store user data in local storage whenever it changes
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);

    return <UserAuthContext.Provider value={{ user, signUp, logIn, googleSignIn, loading }}>{children}</UserAuthContext.Provider>

}

export default UserAuthContextProvider

export function useUSerAuth() {
    return useContext(UserAuthContext);
}