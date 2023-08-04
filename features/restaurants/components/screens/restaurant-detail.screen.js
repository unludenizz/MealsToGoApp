import React, {useState} from "react";
import { View, ScrollView } from "react-native";
import { RestaurantInfoCard } from "../../../restauransinfocomponent";
import { List } from "react-native-paper";



export const RestaurantDetailScreen = ({route}) =>{
    const [breakfastExpanded, setbreakfastExpanded] = useState(false)
    const [lunchExpanded, setlunchExpanded] = useState(false)
    const [dinnerExpanded, setdinnerExpanded] = useState(false)
    const [drinksExpanded, setdrinksExpanded] = useState(false)
    const { restaurant } = route.params;
    return(
        <View >
            <ScrollView>
            <RestaurantInfoCard restaurant={restaurant}/>
            <List.Accordion
            title="Breakfast"
            left={(props)=> <List.Icon {...props} icon={"bread-slice"}/>}
            expanded={breakfastExpanded}
            onPress={()=>setbreakfastExpanded(!breakfastExpanded)}>

                    <List.Item title="Egg Benedict"/>
                    <List.Item title="Classic Breakfast"/>

            </List.Accordion>



            <List.Accordion
            title="Lunch"
            left={(props)=> <List.Icon {...props} icon={"hamburger"}/>}
            expanded={lunchExpanded}
            onPress={()=>setlunchExpanded(!lunchExpanded)}>
                     <List.Item title="Burger & Fries"/>
                     <List.Item title="Steak Sandwich"/>
                     <List.Item title="Mushroom Soup"/>
            </List.Accordion>



            <List.Accordion
            title="Dinner"
            left={(props)=> <List.Icon {...props} icon={"food-variant"}/>}
            expanded={dinnerExpanded}
            onPress={()=>setdinnerExpanded(!dinnerExpanded)}>
                <List.Item title="Spaghetti Bolognese"/>
                <List.Item title="Veal Cutlet With Chicken Mushroom"/>
                <List.Item title="Steak Frites"/>
            </List.Accordion>



            <List.Accordion
            title="Drinks"
            left={(props)=> <List.Icon {...props} icon={"cup"}/>}
            expanded={drinksExpanded}
            onPress={()=>setdrinksExpanded(!drinksExpanded)}>
                <List.Item title="Coffee"/>
                <List.Item title="Tea"/>
                <List.Item title="Modelo"/>
                <List.Item title="Coke"/>
                <List.Item title="Fanta"/>
            </List.Accordion>
            </ScrollView>
        </View>
    )
}