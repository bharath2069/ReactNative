import React from "react";
import ProductList from "../Components/ProductList";


export default function SeeAllProductListScreen({route,navigation}){

    const { products ,category } = route.params;
    return (
         <ProductList products={products} categories={category}/>
    );
}