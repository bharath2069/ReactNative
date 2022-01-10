import React,{useState} from "react";
import {View,Text,StyleSheet} from "react-native";
import {Tab,TabView} from "react-native-elements";
import AppConfig from "../Constants/AppConfig";
import ProductImagesList from "../Components/ProductImagesList";
import ProductVideosList from "../Components/ProductVideosList";

export default function AdditionalImagesScreen({route,navigation}){

    const {product} = route.params;
    const [index,setIndex]=useState(0);
    return (
        <View style={styles.screen}>
             <Tab
            value={index}
            onChange={(e) => setIndex(e)}
            indicatorStyle={{
            backgroundColor: 'white',
            height: 3,
            }}
            backgroundColor={AppConfig.primaryColor}
            >
                <Tab.Item
                title="Images"
                titleStyle={{ fontSize: 12,color:"white" }}
                icon={{ name: 'image', type: 'ionicon', color: 'white' }}
                />
                <Tab.Item
                title="Videos"
                titleStyle={{ fontSize: 12,color:"white" }}
                icon={{ name: 'camera', type: 'ionicon', color: 'white' }}
                />
            </Tab>
            <TabView value={index} onChange={setIndex} animationType="timing">
                <TabView.Item>
                    <ProductImagesList product={product} isImageComponent={true}/>
                </TabView.Item>
                <TabView.Item>
                    <ProductVideosList product={product} isImageComponent={false}/>
                </TabView.Item>
            </TabView>
        </View>
    );
}
const styles=StyleSheet.create({
    screen:{
        flex:1
    }
});