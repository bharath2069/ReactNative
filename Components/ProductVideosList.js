import React from "react";
import AdditionalThumbnailList from "./AdditionalThumbnailList";

export default function ProductVideosList(props){
    return (
        <AdditionalThumbnailList product={props.product} isImageComponent={props.isImageComponent} />
    );
}
