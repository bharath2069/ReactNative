import React from "react";
import {View,StyleSheet,FlatList} from "react-native";
import CategoryList from "../Components/CategoryList";

export default function AllCategoryScreen({route}){

    const { products } = route.params; 
    const GetCategories=({item})=>{
        return (
           <CategoryList data={item} />
        );
    }
    //console.log(products)
    return (
       <View style={styles.screen}>
            <FlatList 
               data={products}
               renderItem={GetCategories}
               horizontal={false}
               numColumns={2}
               showsVerticalScrollIndicator={false}
               />         
       </View>
    );
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
       // marginHorizontal:5
    }
});