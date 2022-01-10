import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ProductDetailScreen from "../Screens/ProductDetailScreen"
import SeeAllProductListScreen from "../Screens/SeeAllProductListScreen";
import BottomTab from "./BottomTab";
import WelcomeScreen from "../Screens/WelcomeScreen";
import AllCategoryScreen from "../Screens/AllCategoryScreen";
import AppConfig from "../Constants/AppConfig";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import LoginScreen from "../Screens/LoginScreen";
import { useSelector } from "react-redux";
import AdditionalImagesScreen from "../Screens/AdditionalImagesScreen";
import SignUpScreen from "../Screens/SignUpScreen";


export default function MainNavigation(){

    const userDetails = useSelector(state=>state.Authorization.userDetails);

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="Welcome" component={WelcomeScreen} 
            options={{headerShown:false}} />

            <Stack.Screen name="Login" component={LoginScreen}
            options={{animation:"slide_from_right",headerShown:false}}
            />

            <Stack.Screen name="SignUp" component={SignUpScreen}
            options={{animation:"slide_from_right",headerShown:false}}
            />

            <Stack.Screen name="BottomTab" component={BottomTab} 
            options={{animation:"slide_from_right",headerShown:false}} />

            <Stack.Screen name="ProductDetail" component={ProductDetailScreen} 
            options={
                ({route})=>(
                    {
                        title:route.params.product.productName,
                        animation:"slide_from_right",
                        headerRight:({focused: boolean, color: string=AppConfig.primaryColor, size: number=22})=>(
                            <FontAwesome5 name="heart" color={string} size={number}/>
                        )
                    })} />

            <Stack.Screen name="AdditionalImages" 
            component={AdditionalImagesScreen} 
            options={
                {
                    title:"More Thumbnails",
                    headerTitleStyle:{
                        color:"white"
                    },
                    headerTintColor:"white",
                    headerStyle:{
                        backgroundColor:AppConfig.primaryColor,
                    }
                }
            }
            />

            <Stack.Screen name="SeeAllProductList" component={SeeAllProductListScreen} 
            options={({route})=>(
                {
                    title:route.params.headerName,
                    headerRight:({ focused: boolean, color: string=AppConfig.primaryColor, size: number=22 })=>(
                        <FontAwesome5 name="search" color={string} size={number}/>
                    )                    
                })} />

            <Stack.Screen name="AllCategory" component={AllCategoryScreen} 
            options={
                ({route})=>({
                    title:"All Category",
                    headerRight:({ focused: boolean, color: string="black", size: number=22 })=>(
                        <FontAwesome5 name="search" color={string} size={number}/>
                    )           
                })
            }
             />
            </Stack.Navigator>
      </NavigationContainer>
    );
}