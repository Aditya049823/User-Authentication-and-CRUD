
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDHOSZ8fZjVblMedANlJNaXGaeTHikFBMA",
  authDomain: "user-authentication-5368c.firebaseapp.com",
  projectId: "user-authentication-5368c",
  storageBucket: "user-authentication-5368c.firebasestorage.app",
  messagingSenderId: "568285573126",
  appId: "1:568285573126:web:fa539250467ca39508d387"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);