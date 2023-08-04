import React, {useContext, useEffect, useState} from "react";
import { StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../../../../services/location/location.context";


export const Search = () =>{
    const { keyword, search } = useContext(LocationContext)
    const [searchKeyword, setSearchKeyword] = useState(keyword)

    useEffect(()=>{
        setSearchKeyword(keyword)
    },[keyword])

    return(
    <View style={styles.search}>
      <Searchbar 
      placeholder="Search for a location" 
      value={searchKeyword}
      icon="map"
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
        position:'absolute',
        zIndex:999,
        top:40,
        width:'100%',
      },
})