import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhXiGXJmRA3JQz396xZ0sPM6Q8_ZFSvWE",
  authDomain: "proyecto-react-80180.firebaseapp.com",
  projectId: "proyecto-react-80180",
  storageBucket: "proyecto-react-80180.appspot.com",
  messagingSenderId: "370010343840",
  appId: "1:370010343840:web:cc665beb2d6dda04b6fcc5",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
