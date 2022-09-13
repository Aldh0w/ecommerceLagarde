// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGlHyF8XQkJms5B_4uoyU9_BjLVFU1Mag",
  authDomain: "ecommercepractica-676af.firebaseapp.com",
  projectId: "ecommercepractica-676af",
  storageBucket: "ecommercepractica-676af.appspot.com",
  messagingSenderId: "473453513584",
  appId: "1:473453513584:web:ddf6f5438528c387de5db5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;