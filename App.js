import React from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigation from "./Navigation/MainNavigation";
import CategoryReducer from "./store/reducers/Category";
import { createStore,combineReducers,applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ProductsReducer from "./store/reducers/Products";
import FlashMessage from "react-native-flash-message";
import { UserDetails } from "./store/reducers/Auth";
import CartReducer from "./store/reducers/Cart";
import ReduxThunk from "redux-thunk";

const CombinedReducers=combineReducers({
  AllCategory : CategoryReducer,
  AllProducts:ProductsReducer,
  Authorization:UserDetails,
  Cart:CartReducer
});

const store=createStore(CombinedReducers,applyMiddleware(ReduxThunk));

export default function MyApp(){
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <MainNavigation />
      </SafeAreaProvider>
      <FlashMessage position="center" />
    </Provider>
  );
}