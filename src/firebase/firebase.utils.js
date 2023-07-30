import {initializeApp} from "firebase/app"
import { GoogleAuthProvider,getAuth,signInWithPopup } from "firebase/auth";

export const app=initializeApp(
    {
        apiKey: "AIzaSyCEfiXULkVb0_6N6RBi_RNcrhw1uUakbwU",
        authDomain: "ecom-db-a1c1a.firebaseapp.com",
        projectId: "ecom-db-a1c1a",
        storageBucket: "ecom-db-a1c1a.appspot.com",
        messagingSenderId: "270373406222",
        appId: "1:270373406222:web:0598dd4600f738ff295e5f",
        measurementId: "G-WRYVP9CQ08"
    }
);

const provider = new GoogleAuthProvider();
export const auth = getAuth(app);

const authPopup = getAuth();
export const signInWithGoogle = () => signInWithPopup(authPopup,provider);

// export app;