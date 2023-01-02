// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth'
// import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2ywTpE3-M6GlaV-OsVQ53LB9iWW_cdLM",
  authDomain: "ams-group.firebaseapp.com",
  projectId: "ams-group",
  storageBucket: "ams-group.appspot.com",
  messagingSenderId: "859650919950",
  appId: "1:859650919950:web:5a8899ec6bcacedce7f65f",
  measurementId: "G-RC4YDDMFXW"
};

// Initialize Firebase

// const analytics = getAnalytics(app);
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
const provider = new GoogleAuthProvider();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth,provider);

// export const db = getFirestore(app);
// export const storage = getStorage(app);
// auth.languageCode = 'it'
// auth.useDeviceLanguage();