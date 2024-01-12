/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpgY0Kkmw1ah_gsaeh6BL_04tnEMZfbgk",
  authDomain: "netflixgpt-93736.firebaseapp.com",
  projectId: "netflixgpt-93736",
  storageBucket: "netflixgpt-93736.appspot.com",
  messagingSenderId: "555657389814",
  appId: "1:555657389814:web:2ff69e79b813aa45c42ed7",
  measurementId: "G-489QJBBD39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();