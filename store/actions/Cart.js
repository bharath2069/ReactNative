export const ADD_TO_CART="ADD_TO_CART";


export default function AddToCart(product){
    return {type:ADD_TO_CART,data:{cartProduct:product}}
}