import {useState, useEffect} from "react";
import { StatusBar} from "react-native";
import { ThemeProvider } from "react-native-paper";
import { RestaurantsContextProvider } from "./services/restaurants/restaurants.context";
import  {LocationContextProvider}  from "./services/location/location.context";
import { Navigation } from "./infrastructure/navigation";
import { FavoritesContextProvider } from "./services/favorites/favorites.context";
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
export default function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      signInWithEmailAndPassword(auth, "dekad@inio.com", "abcdefg")
      .then((userCredential) => {
        // Signed in 
        setisAuthenticated(true)
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
    }, 2000)
  },[])
  
    


  return (
    <>
      <ThemeProvider style={{backgroundColor:'rgba(191, 191, 191, 0.6)'}}>
        <FavoritesContextProvider>
        <LocationContextProvider>
        <RestaurantsContextProvider>
        <Navigation/>
        </RestaurantsContextProvider>
        </LocationContextProvider>
        </FavoritesContextProvider>
      </ThemeProvider>
      <StatusBar backgroundColor= "rgba(191, 191, 191, 0.6)" />
    </>
  );
};
