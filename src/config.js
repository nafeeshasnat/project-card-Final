import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCgY0wggs-gpwB_FKdUzP0jmAlkUpcp8Vg",
    authDomain: "wedding-card-2134b.firebaseapp.com",
    projectId: "wedding-card-2134b",
    storageBucket: "wedding-card-2134b.appspot.com",
    messagingSenderId: "708564136876",
    appId: "1:708564136876:web:007fedd483acdce76d8009",
    measurementId: "G-W1CN7HX3DB"
  };

  const app = initializeApp(firebaseConfig);
export const db = getFirestore();

