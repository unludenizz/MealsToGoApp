import {useContext, useState, useEffect} from "react";
import MapView from "react-native-maps";
import { View, Text, StyleSheet, Image } from "react-native";
import { LocationContext } from "../../../../../../services/location/location.context";
import { Search } from "../components/search.component";
import { RestaurantsContext } from "../../../../../../services/restaurants/restaurants.context";
import { Marker, Callout } from "react-native-maps";
import { RestaurantInfoCard } from "../../../../../restauransinfocomponent";
import {WebView} from "react-native-webview";
import { Platform } from "react-native";




const isAndroid = Platform.OS === 'android'
export const Mapscreen = ({navigation}) =>{


    const { location } = useContext(LocationContext);
    const { restaurants = [] } = useContext(RestaurantsContext);
    const [latDelta, setLatDelta] = useState(0);
    const { lat, lng, viewport } = location;



    useEffect(()=>{
        const northeastLat = viewport.northeast.lat
        const southwestLat = viewport.southwest.lat

        setLatDelta(northeastLat-southwestLat)


    }, [location, viewport])
    return(
    <>
        <Search  />
        
        <MapView style={{height:"100%", width:'100%'}} 
            region={{
            latitude:lat,
            longitude:lng,
            latitudeDelta:latDelta,
            longitudeDelta:0.02,}}
            >
            {restaurants.map((restaurant) => {
                return (
                    <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
                    >
                        <Callout onPress={()=> navigation.navigate("RestaurantDetail", {restaurant})}>
                        <View style={styles.card}>
                            <WebView style={styles.img} source={{uri: restaurant.photos[0]}}/>
                           
                            <Text style={styles.webwiew} center variant="caption" numberOfLines={3}>{restaurant.name}</Text>
                        </View>
                        </Callout>
                        
                    </Marker>
                );
            })}
        </MapView>
    </>)
}
const styles = StyleSheet.create({
    
    card: {
        borderRadius:20,
        padding:10,
        maxWidth:120,
        alignItems:'center',
    },
    img:{
        borderRadius:10,
        width:120,
        height:100,
    },
    webwiew:{
        borderRadius:10,
        width:120,
        height:100,
    },
})