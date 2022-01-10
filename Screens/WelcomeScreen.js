import React from "react";
import {Text,View,StyleSheet,Dimensions,
    StatusBar,ImageBackground,TouchableOpacity} 
    from "react-native";
import AppConfig from "../Constants/AppConfig";
import { useSelector } from "react-redux";

export default function WelcomeScreen({navigation}){
    const userDetails = useSelector(state=>state.Authorization.userDetails);
const LetsGo=()=>{
   if( userDetails.length==0){
    navigation.navigate("Login");
   }else{
    navigation.navigate("BottomTab");
   }
   
}

    return (
        <View style={styles.welcome}>
            <StatusBar translucent={true} backgroundColor="transparent" />
            <ImageBackground source={require("../assets/Images/ecom.jpg")} resizeMode="cover" style={{flex:1,justifyContent:"flex-end"}}>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.btnStoreText}>{AppConfig.StoreName}</Text>
                    </View>
                    <View style={styles.mainContentContainer}>
                        <Text style={{...styles.mainContent,fontFamily:"OpenSans-Italic"}}>Let's Order Something</Text>
                    </View>
                    <View>
                        <Text style={styles.subContent}>Make it fast buddy!!</Text>
                    </View>
                    <TouchableOpacity style={styles.btnContainer} onPress={LetsGo}>
                        <Text style={styles.btnText}>Let's Go</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles=StyleSheet.create({
    welcome:{
        width:AppConfig.WIDTH,
        height:AppConfig.HEIGHT,
        flex:1
    },
    container:{
        width:AppConfig.WIDTH,
        height:AppConfig.HEIGHT * 0.55,
        // backgroundColor:"rgba(277,277,277,0.7)"
    },
    mainContentContainer:{
        paddingBottom:2
    },
    mainContent:{
        fontWeight:"bold",
        fontSize:35,
        color:"white",
        //fontFamily:'OpenSans-Italic'
    },
    subContent:{
        fontSize:25,
        color:"white",
        paddingBottom:7
    },
    btnContainer:{
        width:Dimensions.get("window").width * 0.4,
        height:50,
        backgroundColor:"rgba(277,277,277,0.7)",
        borderRadius:40,
        alignItems:"center",
        justifyContent:"center"
    },
    btnText:{
        color:"black",
        fontSize:20,
        fontWeight:"bold"
    },
    btnStoreText:{
        color:"white",
        fontSize:20,
        fontWeight:"700"
    }
})