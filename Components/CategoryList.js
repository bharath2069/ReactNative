import { useNavigation } from "@react-navigation/core";
import React from "react";
import {Text,View,StyleSheet,ImageBackground,TouchableOpacity} from "react-native";
import AppConfig from "../Constants/AppConfig";


export default function CategoryList(props){

    const navigation=useNavigation();
    const GetProductsForCategories=(item)=>{
        console.log(item.name);
        navigation.navigate("SeeAllProductList",{
            category:item,
            headerName:item.name
        });
    }
    return (
        <TouchableOpacity 
        style={styles.categoryContainer} 
        activeOpacity={0.9}
        onPress={()=>GetProductsForCategories(props.data)}
        >
            <ImageBackground source={require("../assets/slider/slide1.png")} style={styles.innerContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.categoryName}>{props.data.name}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
}

const styles=StyleSheet.create({
    categoryContainer:{
        width:AppConfig.WIDTH * 0.5,
        height:AppConfig.HEIGHT * 0.3,
        //backgroundColor:"red"
    },
    innerContainer:{
        flex:1,
        //backgroundColor:"yellow",
        marginHorizontal:5,
        marginVertical:5,
    },
    textContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    categoryName:{
        color:"white",
        fontSize:17,
        fontFamily:"OpenSans-Bold",
    }
});