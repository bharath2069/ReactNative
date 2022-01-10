import React from "react";
import {Text,View,StyleSheet,Image} from "react-native";
import AppConfig from "../Constants/AppConfig";

export default function HomeProducts(props){
    return (
        <View style={styles.productContainer}>
             <View style={styles.productItem}>
                <Image borderRadius={12}  source={require("../assets/slider/slide2.png")} style={styles.productImage}/>
                <Text style={styles.productName}>{props.productName}</Text>
                <Text style={styles.productPrice}>{props.productCurrency + props.productPrice}</Text>
                <Text style={styles.productPrice}>Rating:{props.productRating}/{props.productTotalRating}</Text>
            </View>
        </View>
    );
}

const styles= StyleSheet.create({
    productContainer:{
        flex:1,
        flexDirection:"row",
        //backgroundColor:"yellow"
    },
    productItem:{
        width:AppConfig.WIDTH * 0.28,
        height:AppConfig.HEIGHT * 0.15,
        alignItems:"flex-start",
        paddingLeft:15,
        //backgroundColor:"yellow"
    },
    productName:{
        fontSize:15,
        color:"black",
        fontFamily:"OpenSans-Bold"
    },
    productImage:{
        width:"100%",
        height:"100%"
    },
    productPrice:{
        color:AppConfig.primaryColor,
        fontFamily:"OpenSans-Regular",
        fontWeight:"bold"
    },
});