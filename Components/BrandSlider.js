import React from "react";
import {Text,View,StyleSheet} from "react-native";
import AppConfig from "../Constants/AppConfig";
import SliderHeader from "./SliderHeader";

export default function BrandSlider(props){
    return (
        <View style={styles.container}>
            <SliderHeader heading={props.name} seeAll={props.seeAll} />
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        width:AppConfig.WIDTH,
        height:AppConfig.HEIGHT * 0.30,
        marginBottom:10,
        //backgroundColor:"yellow"
    }
});