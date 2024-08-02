import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const API_KEY = import.meta.env.VITE_API_KEY;

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: "odysseyadmin-11d08.firebaseapp.com",
    projectId: "odysseyadmin-11d08",
    storageBucket: "odysseyadmin-11d08.appspot.com",
    messagingSenderId: "41534685357",
    appId: "1:41534685357:web:6cf8d88218d839c0934624"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()