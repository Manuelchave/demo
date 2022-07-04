import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBhluxKrsR5BfclUfriRfqcmMMzdhP-ASI",
  authDomain: "actividad-15-e30b6.firebaseapp.com",
  databaseURL: "https://actividad-15-e30b6-default-rtdb.firebaseio.com",
  projectId: "actividad-15-e30b6",
  storageBucket: "actividad-15-e30b6.appspot.com",
  messagingSenderId: "869617072528",
  appId: "1:869617072528:web:376b9122a6b912288a1b15"
};

// Initialize Firebase
const db = initializeApp(firebaseConfig);

export default getDatabase(db);