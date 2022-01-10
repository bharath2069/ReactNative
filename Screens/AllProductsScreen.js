import React from "react";
import ProductList from "../Components/ProductList";

export default function AllProductsScreen(props){

    return (
        <ProductList products={props.products} />
    );
}
