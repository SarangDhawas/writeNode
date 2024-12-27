import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAaI-5Z_I9hcuCGgPg244S6QaqvWCxInNs",
  authDomain: "writenode-d8c07.firebaseapp.com",
  projectId: "writenode-d8c07",
  storageBucket: "writenode-d8c07.firebasestorage.app",
  messagingSenderId: "509947101065",
  appId: "1:509947101065:web:4c15ff52bb73c409256b58",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
