import React  from "react";
import {Text,View,StyleSheet,Image,FlatList} from "react-native";
import AppConfig from "../Constants/AppConfig";
import CATEGORY_SLIDER from "../dummy-data/CategorSlider";
import SliderHeader from "./SliderHeader";

export default function CategorySlider(props){

    const CategorySliderList=({item})=>{
        return (
        <View style={styles.categoryContainer}>
            <View style={styles.categoryGrid}>
                <Image borderRadius={13} source={require("../assets/slider/slide2.png")} style={styles.categoryItem} />
                <Text style={styles.categoryName}>{item.name}</Text>
            </View>
         </View>
        );
    }

    return (
        <View style={styles.container}>
           <SliderHeader heading={props.name} seeAll={props.seeAll} products={props.category} navigateScreen="AllCategory"/>
           <FlatList 
           data={CATEGORY_SLIDER} 
           renderItem={CategorySliderList} 
           horizontal
           showsHorizontalScrollIndicator={false}
           style={{marginHorizontal:10}}
           />
        </View>
    );
}

const styles= StyleSheet.create({
    container:{
        width:AppConfig.WIDTH * 1,
        height:AppConfig.HEIGHT * 0.21,
        marginBottom:10
        //backgroundColor:"yellow"
    },
    categoryContainer:{
        flexDirection:"row",
        paddingLeft:15
    },
    categoryGrid:{
        height:AppConfig.HEIGHT * 0.1,
        //backgroundColor:"red",
        width:AppConfig.WIDTH * 0.2,
        alignItems:"flex-start"
    },
    categoryItem:{
        height:"100%",
        backgroundColor:"red",
        width:"100%"
    },
    categoryName:{
        fontSize:15,
        color:"black",
        fontFamily:"OpenSans-Regular"
    }
});