import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyA2ug0ogi1ulGMN4owymFqd_9OzlLNXCIc",
    authDomain: "mealstogo-dbd85.firebaseapp.com",
    projectId: "mealstogo-dbd85",
    storageBucket: "mealstogo-dbd85.appspot.com",
    messagingSenderId: "871056886146",
    appId: "1:871056886146:web:990da5bc73e6395149e79b"
  };
  
  
    const app = initializeApp(firebaseConfig);
  
  
    const auth = getAuth(app);

export const loginRequest = (email, password)=>{
    signInWithEmailAndPassword(auth, "dekad@inio.com", "abcdefg")
}