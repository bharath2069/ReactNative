import React from "react";
import {TouchableOpacity,StyleSheet,FlatList,View} from "react-native";
import AppConfig from "../Constants/AppConfig";
import SliderHeader from "./SliderHeader";
import HomeProducts from "./HomeProducts";
import { useNavigation } from "@react-navigation/core";


export default function ProductSlider(props){
    const navigation = useNavigation();
    const getProductDetailScreen=(item)=>{
        navigation.navigate("ProductDetail",{
            product:item
        });
    }
    const ProductList=(props)=>{
        return (
            <TouchableOpacity onPress={()=>getProductDetailScreen(props.item)}>
                <HomeProducts 
                productName={props.item.productName} 
                productPrice={props.item.productPrice}  
                productCurrency={props.item.productCurrency} 
                productRating={props.item.productRating} 
                productTotalRating={props.item.productTotalRating} 
                />
            </TouchableOpacity>
        );
    }
    return (
        <View style={styles.container}>
           <SliderHeader heading={props.name} 
           seeAll={props.seeAll} 
           products={props.products} 
           navigateScreen={props.navigateScreen}/>
            <FlatList 
            data={props.products}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={ProductList}
            style={{marginHorizontal:10}}
            />
        </View>
    );
}

const styles= StyleSheet.create({
    container:{
        width:AppConfig.WIDTH,
        height:AppConfig.HEIGHT * 0.30,
        marginBottom:10
        //backgroundColor:"yellow"
    }
});