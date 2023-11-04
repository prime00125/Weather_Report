// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHAze5Yth2k79aDausMNKifi0Qtwa0sRs",
  authDomain: "weather-934a9.firebaseapp.com",
  projectId: "weather-934a9",
  storageBucket: "weather-934a9.appspot.com",
  messagingSenderId: "902483106792",
  appId: "1:902483106792:web:5a0e20417d0b452df6625d",
  measurementId: "G-1EQ4MEQWM2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app); 