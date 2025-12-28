import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBD8fnE4k3MEElbNrb9IEhBtRaNdo69xc",
  authDomain: "tienda-medieval-coderhouse.firebaseapp.com",
  projectId: "tienda-medieval-coderhouse",
  storageBucket: "tienda-medieval-coderhouse.appspot.com",
  messagingSenderId: "637294420964",
  appId: "1:637294420964:web:fa9d01dc5f8571ca97ddf1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
