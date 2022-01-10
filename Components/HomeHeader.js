import React from "react";
import {View,Text,StyleSheet,Dimensions} from "react-native";
import AppConfig from "../Constants/AppConfig";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import GlobalStyles from "../Style/Style";


export default function HomeHeader(){
    return (
        <View style={styles.header}>
            <View>
                <FontAwesome5 name="align-justify" color="black" style={styles.headerJustifyIcon} />
            </View>
            <View>
                <Text style={GlobalStyles.headerName}>{AppConfig.StoreName}</Text>
            </View>
            <View>
                <FontAwesome5 name="search" color="black" style={styles.headerSearchIcon} />
            </View>
        </View>         
    );
}

const styles=StyleSheet.create({
    header:{
        flexDirection:"row",
        width:AppConfig.WIDTH * 1,
        height: AppConfig.HEIGHT * 0.13,
        //backgroundColor:"yellow",
        alignItems:"flex-end",
        justifyContent:"space-between"
    },
    headerJustifyIcon:{
        fontSize:20,
        marginLeft:10,
        color:AppConfig.primaryColor
    },
    headerSearchIcon:{
        fontSize:20,
        marginRight:20,
        color:AppConfig.primaryColor
    }
});