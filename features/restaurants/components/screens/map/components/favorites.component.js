import { useContext } from "react"
import { FavoritesContext } from "../../../../../../services/favorites/favorites.context"
import { AntDesign } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native"






export const Favorite = ({ restaurant }) => {
    const { favorites, addToFavorites, removeFromfavorites} = useContext(FavoritesContext)
    
    const isFavorite = favorites.find((r) => r.placeId === restaurant.placeId)



    
    return(
        <TouchableOpacity 
        onPress={()=> !isFavorite ? addToFavorites(restaurant) : removeFromfavorites(restaurant)}
        
        restaurant={restaurant} 
        style={{position:'absolute', top:25, right:25, zIndex:9}}>
            <AntDesign
            name={
                isFavorite ? "heart" : "hearto"
            }
            size={25}
            color={isFavorite ? "red" : "white"}
            
            />
        </TouchableOpacity>
    )
}