import React from "react";
import {StyleSheet,ScrollView,SafeAreaView} from "react-native";
import HomeHeader from "../Components/HomeHeader";
import Slider from "../Components/Slider";
import CategorySlider from "../Components/CategorySlider";
import AppConfig from "../Constants/AppConfig";
import ProductSlider from "../Components/ProductsSlider";
import BrandSlider from "../Components/BrandSlider";
import { useSelector } from "react-redux";

export default function HomeScreen(){

    const AllCategories=useSelector(state=>state.AllCategory.categories);
    const AllProducts=useSelector(state=>state.AllProducts.AllProducts);
    // const test=useSelector(state=>state.Authorization.userDetails);
    // console.log(test);
    return (
        <SafeAreaView showsVerticalScrollIndicator={false} style={styles.Home}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <HomeHeader />
                <Slider />
                <CategorySlider name="Categories" seeAll="See All" category={AllCategories} navigateScreen="SeeAllProductList"/>
                <ProductSlider name="Latest Products" seeAll="See All" products={AllProducts} navigateScreen="SeeAllProductList" />
                <ProductSlider name="BestSellers Products" seeAll="See All" products={AllProducts} navigateScreen="SeeAllProductList"/>
                <ProductSlider name="Featured Products" seeAll="See All" products={AllProducts} navigateScreen="SeeAllProductList"/>
                <BrandSlider name="Shop by Brand" seeAll="See All" navigateScreen="SeeAllProductList"/>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles=StyleSheet.create({
    Home:{
        flex:1,
        width:AppConfig.WIDTH,
        height:AppConfig.HEIGHT
    },
    
});