import React, { useContext, useState } from "react";
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";
import { StatusBar, StyleSheet, View, FlatList, Pressable } from "react-native";
import { RestaurantInfoCard } from "../../../restauransinfocomponent";
import { RestaurantsContext } from "../../../../services/restaurants/restaurants.context";
import { Search } from "../search.component";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FavoritesBar } from "./map/components/favorites-bar";
import { FavoritesContext } from "../../../../services/favorites/favorites.context";


export const RestaurantsScreen = ({navigation}) => {

  const {isLoading, error, restaurants} = useContext(RestaurantsContext)
  const [isToggled, setIsToggled] = useState(false)
  const {favorites} = useContext(FavoritesContext)




  return (
  
  
  <View style={styles.container}>
    {
      isLoading &&(
        <View style={{position:'absolute', top:'50%', left:'50%'}}>
          <ActivityIndicator  size={50} style={{marginLeft:-25}}
          animating={true}
          color={Colors.blue300}/>
        </View>
      )
    }
    <Search isFavoritesToggled={isToggled} onFavoritesToggle={()=> setIsToggled(!isToggled)}/>
    {isToggled && <FavoritesBar onNavigate={navigation.navigate} favorites={favorites}/>}
    <FlatList 
    data={restaurants}
    renderItem={({ item }) =>{
      return(
        <TouchableOpacity onPress={() =>
          navigation.navigate("RestaurantDetail", {
            restaurant: item,
          })
        }>
          <View style={styles.list}>
            <RestaurantInfoCard restaurant={item}/>
          </View>
        </TouchableOpacity>
      
      );
    }}
    keyExtractor={(item) => item.name} 
    contentContainerStyle={{padding:16,}}
    />
    
  </View>
 );     
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    marginTop: StatusBar.currentHeight,
  },
  
  list: {
    flex: 1,
    padding: 16,
  },
});
