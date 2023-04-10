import firebase from "firebase/compat/app";
import { getFirestore} from 'firebase/firestore/lite';
// import {getDatabase} from 'firebase/database'
import {getDatabase} from 'firebase/database'



import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgVH2lKCNpdQfiUPj2n9WuF6ix49DL2VY",
  authDomain: "v--guard-consultancy.firebaseapp.com",
  databaseURL: "https://v--guard-consultancy-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "v--guard-consultancy",
  storageBucket: "v--guard-consultancy.appspot.com",
  messagingSenderId: "140475105504",
  appId: "1:140475105504:web:a289ed26c7944b3e5d9085"
};

// // Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
// export const db = getFirestore(app);
export const db1 = getDatabase(app);
