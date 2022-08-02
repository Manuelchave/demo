import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCwfKPBNNolkL4qA_QBOkdv0CGIlhY755M",
  authDomain: "devices-27177.firebaseapp.com",
  databaseURL: "https://devices-27177-default-rtdb.firebaseio.com",
  projectId: "devices-27177",
  storageBucket: "devices-27177.appspot.com",
  messagingSenderId: "62780679758",
  appId: "1:62780679758:web:b91698aaff15232033451f"
};

// Initialize Firebase
const db = initializeApp(firebaseConfig);

export default getDatabase(db);