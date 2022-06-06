import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const app = initializeApp({
    apiKey: "AIzaSyBV_P6tkcvqyIE7gJlSmDPODHK-38qCfgA",
    authDomain: "seteam14-f7e11.firebaseapp.com",
    projectId: "seteam14-f7e11",
    storageBucket: "seteam14-f7e11.appspot.com",
    messagingSenderId: "69538108357",
    appId: "1:69538108357:web:3a8f23247872641906b1ac",
    measurementId: "G-0VNPLY49FY"
});


export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;