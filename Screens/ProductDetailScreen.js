import React,{useState} from "react";
import {Text,View,StyleSheet,Image,ScrollView} from "react-native";
import AppConfig from "../Constants/AppConfig";
import { Divider,Button } from "react-native-elements";
import { showMessage, hideMessage } from "react-native-flash-message";
import { useSelector,useDispatch } from "react-redux";
import ProductSlider from "../Components/ProductsSlider";
import AddToCart from "../store/actions/Cart";
export default function ProductDetailScreen({route,navigation}){

    const [CartButtonText,setCartButtonText]=useState("Add to cart")
    const AllProducts=useSelector(state=>state.AllProducts.AllProducts);
    const {product}= route.params;
    const dispatch = useDispatch();
    const CartProducts = useSelector(state=>state.Cart.cartItems);
    console.log(CartProducts);
    CartProducts.forEach(function(x){
        if(x.Products.id==product.id){
            setCartButtonText("Added");
        }
    })
    const SeeMoreImages=()=>{
        navigation.navigate("AdditionalImages",{
            product:product
        });
    }
    const addProductToCart=()=>{
        
        dispatch(AddToCart(product))
        showMessage({
            message: "Added to cart",
            titleStyle:{
                fontSize:18,
                fontFamily:"OpenSans-Regular"
            },
            backgroundColor:AppConfig.primaryColor,
            type: "success",
          });
    }
    return (
        <ScrollView style={styles.screen} showsVerticalScrollIndicator={false} >
            <View style={styles.imageConteiner}>
                <Image source={require("../assets/Products/product1.jpg")}  style={styles.image} />
            </View>
            <View style={styles.productNameContainer}>
                <Text style={styles.productName}>{product.productName}</Text>
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.productPrice}>{product.productCurrency}{product.productPrice}</Text>
                <Text style={styles.productPrice}>Rating {product.productRating}/{product.productTotalRating}</Text>
            </View>
            <Divider width={1} style={{marginVertical:5}} />
            <View>
                <Text style={styles.descriptionTitle}>Brand</Text>
                <Text style={styles.description}>{product.Brand}</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionTitle}>Description</Text>
                <Text style={styles.description}>{product.productDescription}</Text>
            </View>
            <View style={styles.cartButton}>
            {
                product.additionalImages.length==0 && product.videos.length==0
                ?
                <View></View>
                :
                <Button
                        title="See More Images"
                        buttonStyle={{
                        borderColor: 'black',
                        borderWidth:1
                        }}
                        type="outline"
                        titleStyle={{ color: AppConfig.primaryColor }}
                        containerStyle={{
                        marginHorizontal: 10,
                        marginVertical:10
                        }}
                        onPress={SeeMoreImages}
                    />
            }
                <Button
                    title={CartButtonText}
                    buttonStyle={{ backgroundColor: AppConfig.primaryColor }}
                    containerStyle={{
                    height: 40,
                    marginHorizontal: 5,
                    }}
                    titleStyle={{
                    color: 'white'
                    }}
                    onPress={addProductToCart}
                />
            </View>
            {/* <Divider width={1} style={{marginVertical:5}} />
            <View style={styles.productContainer}>
            <ProductSlider name="BestSellers Products" seeAll="See All" products={AllProducts} navigateScreen="SeeAllProductList"/>
            </View> */}
        </ScrollView>
    );
}
const styles= StyleSheet.create({
    screen:{
        flex:1
    },
    imageConteiner:{
        width:AppConfig.WIDTH,
        height:AppConfig.HEIGHT * 0.4,
        //backgroundColor:"yellow"
    },
    image:{
        width:"100%",
        height:"100%"
    },
    productNameContainer:{
        marginVertical:10
    },
    productName:{
        fontFamily:"OpenSans-Bold",
        fontSize:28,
        color:AppConfig.primaryColor
    },
    priceContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:5
    },
    productPrice:{
        fontFamily:"OpenSans-Bold",
        fontSize:25,
        color:"black"
    },
    descriptionContainer:{
        marginVertical:10
    },
    descriptionTitle:{
        fontFamily:"OpenSans-Bold",
        fontSize:20,
        color:AppConfig.primaryColor
    },
    description:{
        color:"black",
        marginHorizontal:5
    },
    cartButton:{
        marginVertical:10
    }
});