import React, {useContext, useEffect, useState} from "react";
import { StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../services/location/location.context"; 


export const Search = ({ isFavoritesToggled, onFavoritesToggle}) =>{
    const { keyword, search } = useContext(LocationContext)
    const [searchKeyword, setSearchKeyword] = useState(keyword)

    useEffect(()=>{
        search(searchKeyword)
    },[])

    return(
    <View style={styles.search}>
      <Searchbar 
      icon={isFavoritesToggled ? "heart" : "heart-outline"}
      onIconPress={onFavoritesToggle}
      placeholder="Search for a location" 
      value={searchKeyword}
      onSubmitEditing={() =>{
        search(searchKeyword)
      }}
      onChangeText={(text) =>{
        setSearchKeyword(text)
      }}/>
    </View>
)}




const styles = StyleSheet.create({
    search: {
        padding: 16,
        
      },
})