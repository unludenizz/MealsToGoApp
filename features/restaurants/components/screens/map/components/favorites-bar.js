import { Text, View, ScrollView, TouchableOpacity } from "react-native"
import { RestaurantInfoCard } from "../../../../../restauransinfocomponent"





export const FavoritesBar = ({favorites, onNavigate}) => {

    if(!favorites.length){
        return null
    }

    return(
    <View style={{padding:10}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {favorites.map((restaurant) =>{
                const key = restaurant.name.split(" ").join("")
                return(
                    <View key={key} style={{marginRight:10, paddingLeft:10, fontsize:900,}}>
                        <TouchableOpacity onPress={()=>onNavigate("RestaurantDetail", {
            restaurant,
          })}>
                            <RestaurantInfoCard restaurant={restaurant}/>
                        </TouchableOpacity>
                    </View>
                )
            })}
        </ScrollView>
    </View>
)}
