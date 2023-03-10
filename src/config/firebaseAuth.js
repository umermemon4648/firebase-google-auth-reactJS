// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAp-loDPLtgqlPUe0BoULVOagKoUWEAKo",
  authDomain: "fir-auth-659b9.firebaseapp.com",
  projectId: "fir-auth-659b9",
  storageBucket: "fir-auth-659b9.appspot.com",
  messagingSenderId: "513042836634",
  appId: "1:513042836634:web:9d6bcb9910209122334323",
  measurementId: "G-9MC9EXLZJC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// firebase= initializeApp(firebaseConfig);


const auth = getAuth(app)

export default auth
// export default firebase