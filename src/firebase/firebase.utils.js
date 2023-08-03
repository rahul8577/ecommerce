import { initializeApp } from "firebase/app"


import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

export const app = initializeApp(
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

export const db = getFirestore(app);

export const createUserProfile = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userref = doc(db, `users/${userAuth.uid}`);
    const snapshot = await getDoc(userref);

    if (!snapshot.exists()) {
        console.log(userAuth)
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await setDoc(userref, {
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (error) {
            console.log(error.message)
        }

    }
    return userref;

}

const provider = new GoogleAuthProvider();
export const auth = getAuth(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);

