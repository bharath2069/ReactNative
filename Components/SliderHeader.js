import { useNavigation } from "@react-navigation/core";
import React from "react";
import {Text,View,StyleSheet,TouchableOpacity} from "react-native";
import AppConfig from "../Constants/AppConfig";



export default function SliderHeader(props){
    const navigation=useNavigation();
    const getProductListScreen=(props)=>{
        navigation.navigate(props.navigateScreen,{
            products:props.products,
            headerName:props.heading
        })
    }
    return (
        <View style={styles.headingContainer}>
            <Text style={styles.headingText}>{props.heading}</Text>
            <TouchableOpacity onPress={()=>getProductListScreen(props)}>
               <Text style={styles.headingSeeAllText}>{props.seeAll}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles=StyleSheet.create({
    headingContainer:{
        flexDirection:"row",
        height:AppConfig.HEIGHT * 0.05,
        //backgroundColor:"red",
        justifyContent:"space-between"

    },
    headingText:{
        fontFamily:"OpenSans-Bold",
        fontSize:20,
        color:"black",
        paddingLeft:15
    },
    headingSeeAllText:{
        fontFamily:"OpenSans-Bold",
        fontSize:15,
        color:AppConfig.primaryColor,
        paddingRight:15
    },
});