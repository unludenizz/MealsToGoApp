import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const FavoritesContext =  createContext()

export const FavoritesContextProvider = ({children}) =>{

    const [favorites, setFavorites] = useState([])



    const saveFavourites = async (value) => {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem("@favourites", jsonValue);
        } catch (e) {
          console.log("error storing", e);
        }
      };
    
      const loadFavourites = async () => {
        try {
          const value = await AsyncStorage.getItem("@favourites");
          if (value !== null) {
            setFavorites(JSON.parse(value));
          }
        } catch (e) {
          console.log("error loading", e);
        }
      };

      useEffect(() => {
        loadFavourites();
      }, []);
    
      useEffect(() => {
        saveFavourites(favorites);
      }, [favorites]);
    



    const add = (restaurant)=>{
        setFavorites([ ...favorites, restaurant])
    }

    const remove = (restaurant) =>{
        const newFavorites = favorites.filter(
            (x) => x.placeId !== restaurant.placeId
        )
        setFavorites(newFavorites)
    }

    return(
        <FavoritesContext.Provider
        
        value={{
            favorites,
            addToFavorites: add,
            removeFromfavorites: remove,
        }}
        
        
        >
            {children}
        </FavoritesContext.Provider>
    )
}