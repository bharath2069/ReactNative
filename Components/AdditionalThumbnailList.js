import React from "react";
import {Text,View,StyleSheet,Image,FlatList} from "react-native";
import AppConfig from "../Constants/AppConfig";


export default function AdditionalThumbnailList(props){

    const product=props.product;

    const ThumbNailList=()=>{
        return (
        <View style={styles.screen}>
            <View style={styles.imageContainer}>
                <View style={styles.innerContainer}>
                   {props.isImageComponent 
                   ? 
                    <Image source={require("../assets/slider/slide1.png")} style={styles.image} />
                   :
                    <Image source={require("../assets/slider/slide2.png")} style={styles.image} />
                   }
                </View>
            </View>
        </View>
        );
    }

    return (
        //for image component
        props.isImageComponent ?  
        product.additionalImages.length==0 ? 
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            <Text>No { props.isImageComponent ?  "Images" : "Videos" }  Found</Text>
        </View>
        :
        <FlatList
        data={product.additionalImages}
        renderItem={ThumbNailList}
        showsVerticalScrollIndicator={false}
        />
        :
        //for  video compoent
        product.videos.length==0 ? 
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            <Text>No { props.isImageComponent ?  "Images" : "Videos" }  Found</Text>
        </View>
        :
        <FlatList
        data={product.videos}
        renderItem={ThumbNailList}
        showsVerticalScrollIndicator={false}
        />
    );
}

const styles=StyleSheet.create({
    screen:{
        flex:1
    },
    imageContainer:{
        width:AppConfig.WIDTH,
        height:AppConfig.HEIGHT * 0.3,
    },
    innerContainer:{
        flex:1,
        marginHorizontal:5,
        backgroundColor:"yellow",
        borderRadius:15,
        marginVertical:5
    },
    image:{
        width:"100%",
        height:"100%"
    }
});