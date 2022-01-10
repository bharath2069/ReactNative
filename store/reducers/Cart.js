import { ADD_TO_CART } from "../actions/Cart";
import CartModel from "../../model/CartModel";
const initialStateForCart={
    cartItems:[],
    totalAmount:0,
    productQuantity:{}
    
}

export default function CartReducer(state=initialStateForCart,action){
    switch(action.type){
        case ADD_TO_CART:
            var newProductToCart=new CartModel("1",action.data.cartProduct);
            var totalAmount = state.totalAmount + action.data.cartProduct.productPrice;
            return {
                ...state,
                cartItems:state.cartItems.push(newProductToCart),
                totalAmount:totalAmount
            };
    }
    return state;
}