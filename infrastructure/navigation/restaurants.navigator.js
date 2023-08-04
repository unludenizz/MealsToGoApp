import React from "react"
import { Text } from "react-native"
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack"
import { RestaurantDetailScreen } from "../../features/restaurants/components/screens/restaurant-detail.screen"
import { RestaurantsScreen } from "../../features/restaurants/components/screens/restaurants.screen" 

export const RestaurantStack = createStackNavigator()

export const RestaurantsNavigator = () =>{
    return (
        <RestaurantStack.Navigator headerMode ="none" 
        
        screenOptions={{
            ...TransitionPresets.ModalPresentationIOS,
        }}
        
        >
            <RestaurantStack.Screen 
            name="Restaurants"
            component={RestaurantsScreen}
            />
            <RestaurantStack.Screen 
            name="RestaurantDetail"
            component={RestaurantDetailScreen}/>
        </RestaurantStack.Navigator>
    )
    
}