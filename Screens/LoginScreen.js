import React from "react";
import {View,Text,StyleSheet,TextInput,TouchableWithoutFeedback,Keyboard} from "react-native";
import AppConfig from "../Constants/AppConfig";
import { Button } from "react-native-elements";
import {Formik} from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { UpdateUserDetails } from "../store/actions/Auth";
import GlobalStyles from "../Style/Style";

// for login form validation
const loginSchema = yup.object({
    username:yup.string().required(),
    password:yup.string().required()
});

export default function LoginScreen({route,navigation}){

    const dispatch=useDispatch();
    const countinueWithoutLogin=()=>{
        navigation.navigate("BottomTab");
    }

    const SignUp=()=>{
        navigation.navigate("SignUp");
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.screen}>
            <View style={styles.loginContainer}>
                <Text style={styles.loginHeading}>Do a login Dude!</Text>
                <Formik
                initialValues={{username:"",password:""}}
                validationSchema={loginSchema}
                onSubmit={(values,action)=>{
                    action.resetForm();
                    dispatch(UpdateUserDetails(values));
                }}
                >
                    {(props)=>(
                        <View>
                   <View>
                        <Text style={GlobalStyles.label}>Email</Text>
                        <TextInput
                            style={GlobalStyles.inputText}
                            placeholder="Email"
                            onChangeText={props.handleChange("username")}
                            value={props.values.username}
                        />
                        <Text style={GlobalStyles.errMsg}>{ props.touched.username && props.errors.username}</Text>
                   </View>
                    <View>
                        <Text style={GlobalStyles.label}>Password</Text>
                        <TextInput
                            style={GlobalStyles.inputText}
                            placeholder="Password"
                            onChangeText={props.handleChange("password")}
                            value={props.values.password}
                        />
                        <Text style={GlobalStyles.errMsg}>{ props.touched.password && props.errors.password}</Text>
                    </View>
                    <View>
                    <Button
                        title="Login"
                        //loading
                        titleStyle={{ fontFamily:"OpenSans-Bold" }}
                        buttonStyle={{
                        backgroundColor: 'rgba(39, 39, 39, 1)',
                        borderColor: 'transparent',
                        borderWidth: 0,
                        borderRadius: 5,
                        }}
                        containerStyle={{
                        //width: 200,
                        height: 60,
                        //marginVertical: 10,
                        color:"White"
                        }}
                        onPress={props.submitForm}
                    />
                    <Button
                        title="SIGN UP"
                        buttonStyle={{
                        borderColor: 'black',
                        borderWidth:1
                        }}
                        type="outline"
                        titleStyle={{ color: 'white' }}
                        containerStyle={{
                        marginHorizontal: 10,
                        }}
                        onPress={SignUp}
                    />
                    </View>
                </View>
                    )}
                </Formik>
            </View>
            <View>
                <Button
                    title="Countinue Without login"
                    buttonStyle={{
                    borderColor: AppConfig.primaryColor,
                    }}
                    type="outline"
                    raised
                    titleStyle={{ color: AppConfig.primaryColor }}
                    containerStyle={{
                    marginHorizontal: 10,
                    marginBottom:10
                    }}
                    onPress={countinueWithoutLogin}
                />
            </View>
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:AppConfig.primaryColor
    },
    loginContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    loginHeading:{
        color:"white",
        fontFamily:"OpenSans-Bold",
        fontSize:25
    }
});