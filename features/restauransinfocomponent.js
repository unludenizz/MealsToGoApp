import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from 'react-native-svg';
import open from "../assets/open";
import star from "../assets/star";
import { FontAwesome5 } from '@expo/vector-icons';
import { Favorite } from "./restaurants/components/screens/map/components/favorites.component";


export const RestaurantInfoCard = ({restaurant = {}})=> {
    const {
        name = 'Some Restaurant',
        icon,
        photos = [
            "https://cdn.mos.cms.futurecdn.net/HsDtpFEHbDpae6wBuW5wQo.jpg"
        ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
        placeId
    } = restaurant

    const ratingArray = Array.from(new Array(Math.floor(rating)))




    return (
    <Card elevation={5} style={styles.card}>
        <Favorite restaurant={restaurant} />
        <Card.Cover key={name} style={styles.cover} source={{uri: photos[0]}} />
        <Text style={styles.title}>{name}</Text>
        <View style={styles.mystar}>
            {ratingArray.map((_, i) => (
                <SvgXml key={`star-${placeId}-${i}`}
                 xml={star} width={20} height={20}/>
            ))}
            <View style={styles.isopen}>
                {isClosedTemporarily && <Text style={{color:'red',}}>CLOSED TEMPORARILY</Text>}
                {isOpenNow && <SvgXml xml={open} width={20} height={20}/>}
                <View style={{paddingLeft:10,}}>
                <FontAwesome5 name="hamburger" style={{paddingRight:15,}} size={20} color="black" />
                </View>
            </View>
            
        </View>
        
        <Text style={styles.address}>{address}</Text>
        
    </Card>
    );
}
const styles = StyleSheet.create({
    
    card: {
        backgroundColor:"white",
    },
    mystar:{
        paddingLeft:5,
        flexDirection:'row',
        alignItems:'center',
        paddingTop:5,
        paddingBottom:10,
    },
    isopen:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
    },
    cover:{
        padding:20,
        backgroundColor:"white"
    },
    title:{
        padding:8,
        fontSize:20,
    },
    address:{
        paddingLeft:8,
        fontWeight:'800',
    },
})