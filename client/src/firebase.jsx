
import { initializeApp } from "firebase/app";
import { getAuth, signOut, } from 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyDkPxwX2V7RclpH2IhVOpQjrcioYSPPicI",
    authDomain: "auth-59f60.firebaseapp.com",
    projectId: "auth-59f60",
    storageBucket: "auth-59f60.appspot.com",
    messagingSenderId: "930567091510",
    appId: "1:930567091510:web:33df866d322b0b6d456f97"
};


const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);







export const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.log('Logout error:', error);
    }
};

export default firebase;