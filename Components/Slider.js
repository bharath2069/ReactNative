import React from "react";
import {Text,View,StyleSheet,FlatList,ImageBackground} from "react-native";
import SLIDER from "../dummy-data/slider";
import AppConfig from "../Constants/AppConfig";

export default function Slider(){

    const RenderSliderView=({item})=>{
        return (
           <ImageBackground borderRadius={25} source={require("../assets/slider/slide1.png")} style={styles.cardContainer}>
              <View style={styles.contentContainer}>
                <Text style={styles.sliderTitle}>{item.title}</Text>
                <Text style={styles.sliderDescription}>{item.description}</Text>
              </View>
           </ImageBackground>
        );
    }

    return (
    <View style={styles.sliderContainer}>
        <FlatList data={SLIDER} 
        renderItem={RenderSliderView} 
        scrollEnabled
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        scrollEventThrottle={16}
        decelerationRate="fast"
        style={styles.sliderList}
        />
    </View>
    );
}

const styles=StyleSheet.create({
    sliderContainer:{
        width:AppConfig.WIDTH * 1,
        height:AppConfig.HEIGHT * 0.3,
        marginVertical:10,
    },
    sliderList:{
        //backgroundColor:"yellow",
        flex:1,
        margin:10,

    },
    cardContainer:{
          flex:1,
         //backgroundColor:"yellow",
         width:AppConfig.WIDTH - 20,
         alignItems:"flex-start",
         justifyContent:"center"
         //elevation:7,
         //borderRadius:30
    },
    sliderTitle:{
        color:"white",
        fontSize:25,
        fontWeight:"500",
        fontFamily:"OpenSans-Bold",
    },
    sliderDescription:{
        color:"white",
        fontSize:15,
        fontFamily:"OpenSans-Regular",
    },
    contentContainer:{
        paddingLeft:7,
        marginTop:15,
        width:AppConfig.WIDTH * 0.5
    }
});