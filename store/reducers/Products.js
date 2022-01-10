import PRODUCTS from "../../dummy-data/Product"

const initialStateForProducts={
    AllProducts:PRODUCTS
}

export default function ProductsReducer(state=initialStateForProducts,actions){
    return state;
}