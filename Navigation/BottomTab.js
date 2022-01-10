import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import AllProductsScreen from "../Screens/AllProductsScreen";
import CartScreen from "../Screens/CartScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AppConfig from "../Constants/AppConfig";
import GlobalStyles from "../Style/Style";
import { useSelector } from "react-redux";

export default function BottomTab(){
    const AllProducts = useSelector(state=>state.AllProducts.AllProducts);
    const BottomTab = createBottomTabNavigator();
    return (
        <BottomTab.Navigator 
        screenOptions={{
            tabBarActiveTintColor:AppConfig.activeIconColorForBottomTab,
            tabBarInactiveTintColor:AppConfig.inActiveIconColorForBottomTab,
            tabBarShowLabel:false,
            tabBarStyle:{
                backgroundColor:AppConfig.secondaryColor
            },
            headerTitleStyle:GlobalStyles.headerName
          }}
         
        >
            <BottomTab.Screen name="Home" 
            component={HomeScreen} 
            options={
                {
                    headerShown:false,
                    tabBarIcon:({ focused: boolean, color: string, size: number })=>(
                        <FontAwesome5 name="home" color={string} size={number} />
                    ),
                }
            } />
            <BottomTab.Screen name="AllProducts" 
            //component={AllProductsScreen} 
            children={()=><AllProductsScreen products={AllProducts} />}
            options={
                {
                    headerTitleAlign:"left",
                    title:"All Products",
                    tabBarIcon:({ focused: boolean, color: string, size: number })=>(
                        <FontAwesome5 name="border-all" color={string} size={number}/>
                    ),
                    headerRight:({ focused: boolean, color: string=AppConfig.primaryColor, size: number=22 })=>(
                        <FontAwesome5 name="search" color={string} size={number} style={{marginRight:20}} />
                    ),
            
                    
                }
            } />
            <BottomTab.Screen name="Cart" 
            component={CartScreen} 
            options={
                {
                    headerTitleAlign:"center",
                    title:"Your Cart",
                    tabBarIcon:({ focused: boolean, color: string, size: number })=>(
                        <FontAwesome5 name="cart-plus" color={string} size={number}/>
                    ),
                    tabBarBadge:2,
                }   
            }  />
            <BottomTab.Screen name="Profile" 
            component={ProfileScreen} 
            options={
                {
                    headerTitleAlign:"center",
                    title:"Your Profile",
                    tabBarIcon:({ focused: boolean, color: string, size: number })=>(
                        <FontAwesome5 name="user" color={string} size={number}/>
                    )
                }
            }  />
        </BottomTab.Navigator>
    );
}