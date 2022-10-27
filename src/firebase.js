// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfeRst2dqd4jga18yifB0R0j2W-qloPes",
  authDomain: "sitefael-7dcab.firebaseapp.com",
  projectId: "sitefael-7dcab",
  storageBucket: "sitefael-7dcab.appspot.com",
  messagingSenderId: "578763459568",
  appId: "1:578763459568:web:70b4330a1e4258d46aab35",
  measurementId: "G-KWBTV48VZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);