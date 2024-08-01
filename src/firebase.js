import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCScASCQ2uPgxQqNnoqwSy6OAQc8ZhERnU",
    authDomain: "personalweb12-c6f36.firebaseapp.com",
    projectId: "personalweb12-c6f36",
    storageBucket: "personalweb12-c6f36.appspot.com",
    messagingSenderId: "774564946771",
    appId: "1:774564946771:web:2cc6f03bf2d8c5d10f37a6",
    measurementId: "G-PD3BBW8V2Y"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
