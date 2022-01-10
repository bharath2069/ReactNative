import React from "react";
import AdditionalThumbnailList from "./AdditionalThumbnailList";


export default function ProductImagesList(props){

    
    //console.log(product)
    return (
        <AdditionalThumbnailList product={props.product} isImageComponent={props.isImageComponent} />
    );
}

