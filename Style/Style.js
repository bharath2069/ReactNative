import { StyleSheet } from "react-native";
import AppConfig from "../Constants/AppConfig";

const GlobalStyles=StyleSheet.create({
    headerName:{
        fontFamily:"OpenSans-ExtraBold",
        fontSize:22,
        color:AppConfig.primaryColor
    },
    inputText:{
        height:40,
        backgroundColor:"white",
        width:AppConfig.WIDTH * 0.95,
        borderRadius:14,
        paddingLeft:13
    },
    label:{
        color:"white",
        fontSize:15,
        fontFamily:"OpenSans-Regular"
    },
    errMsg:{
        color:"black",
    }
});

export default GlobalStyles;