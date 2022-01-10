import { useNavigation } from "@react-navigation/core";
import React from "react";
import {View,Text,StyleSheet,Image,FlatList,TouchableOpacity} from "react-native";
import AppConfig from "../Constants/AppConfig";

export default function ProductList(props){

    const navigation=useNavigation();

    const categoryDetails=props.categories;
    //console.log(categoryDetails);

    const ProductDetailScreen=(product)=>{
        navigation.navigate("ProductDetail",{
            product:product
        })
    }
    const ProductList=(data)=>{
        return (
        <TouchableOpacity style={styles.container} onPress={()=>ProductDetailScreen(data.item)}>
            <View style={styles.innerContainer}>
                <View style={styles.imageContainer}>
                    <Image source={require("../assets/slider/slide2.png")} style={styles.productImage} />
                </View>
                <View style={styles.productDetailsContainer}>
                    <Text style={styles.productName}>{data.item.productName}</Text>
                    <Text style={styles.productPrice}>{data.item.productCurrency}{data.item.productPrice}</Text>
                    <Text style={styles.productPrice}>Brand:{data.item.Brand}</Text>
                    <Text style={styles.productPrice}>{data.item.stockStatus}</Text>
                    <Text style={styles.productStock}>Rating:{data.item.productRating}/{data.item.productTotalRating}</Text>
                    <Text style={styles.productViewMore}>View More {'->'} </Text>
                </View>
            </View>
        </TouchableOpacity>
        );
    }

    return (
        <FlatList
        data={props.products}
        renderItem={ProductList}
        showsVerticalScrollIndicator={false}
        />
    );
}

const styles=StyleSheet.create({
    container:{
        width:AppConfig.WIDTH,
        height:AppConfig.HEIGHT * 0.2,
        marginBottom:10,
        marginTop:10
    },
    innerContainer:{
        flex:1,
        //backgroundColor:"yellow",
        marginHorizontal:3,
        flexDirection:"row"
    },
    imageContainer:{
        width:"50%",
        height:"100%",
        //backgroundColor:"red"
    },
    productImage:{
        width:"100%",
        height:"100%",
        borderRadius:14
    },
    productDetailsContainer:{
        width:"100%",
        height:"100%",
        //backgroundColor:"red"
        marginLeft:5
    },
    productName:{
        color:"black",
        fontSize:18,
        fontFamily:"OpenSans-Bold"
    },
    productPrice:{
        color:AppConfig.primaryColor,
        fontSize:15,
        fontFamily:"OpenSans-Bold"
    },
    productStock:{
        color:"red",
        fontSize:15,
        fontFamily:"OpenSans-Bold"
    },
    productViewMore:{
        fontFamily:"OpenSans-Regular",
        fontSize:14,
        color:"black"
    }
});