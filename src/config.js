// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getAuth} from 'firebase/auth';

// import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-vsy2BDrbPUmLvYts_cUA6S019DHOpIA",
  authDomain: "rj-feedback-system.firebaseapp.com",
  projectId: "rj-feedback-system",
  storageBucket: "rj-feedback-system.appspot.com",
  messagingSenderId: "1086132466925",
  appId: "1:1086132466925:web:e9e78b56eb64be726988e4",
  measurementId: "G-YBYTVHMCLN"
};
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
const app = initializeApp(firebaseConfig);
const imgDB = getStorage(app)
const txtDB = getFirestore(app)

export {firebase,imgDB,txtDB};