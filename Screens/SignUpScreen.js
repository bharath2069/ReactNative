import React,{useState} from "react";
import {View,Text,StyleSheet,ScrollView,TextInput,TouchableWithoutFeedback,Keyboard} from "react-native";
import AppConfig from "../Constants/AppConfig";
import GlobalStyles from "../Style/Style";
import { Formik } from "formik";
import { ButtonGroup,Button } from "react-native-elements";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { SignUpUser } from "../store/actions/Auth";
import { RadioButton } from "react-native-paper";
import GetEmailExistsStatus from "../Functions/ConstantFunctions";

const signUpSchema=yup.object({
    FirstName:yup.string().required().min(2),
    LastName:yup.string().required(),
    Email:yup.string().required(),
    PhoneNumber:yup.string().required(),
    AlternatePhoneNumber:yup.string().required(),
    Password:yup.string().required().min(5),
    ConfirmPassword:yup.string().required().min(5)
    .oneOf([yup.ref("Password"),null],"Password MisMatching")
});

export default function SignUpScreen({route,navigation}){
    const [btnLoading,setBtnLoading]=useState(false);
    const [gender,setGender]=useState("male");
    const [isEmailExists,setEmailExists]=useState(false);

    const dispatch = useDispatch();
    //console.log(useSelector(state => state.Authorization));
    const  submitSignUp=(userdata)=>{
        setBtnLoading(true);
        userdata.Gender=gender;
        const test=dispatch(SignUpUser(userdata));
        console.log("after dispatch");
        setBtnLoading(false);
        //console.log(test);
        // const isEmailAlreadyExists=GetEmailExistsStatus();
        // console.log("email Exists" + isEmailAlreadyExists);
        // if(isEmailAlreadyExists){
        //     setEmailExists(true)
        // }else{
        //     navigation.navigate("BottomTab");
        // }
    }
    return (
        <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.formContainer}>
                    <Text style={styles.headingText}>Create an Account</Text>
                        <Formik
                        initialValues={
                            {FirstName:'',LastName:'',Email:'',PhoneNumber:'',
                            AlternatePhoneNumber:'',Gender:gender,Password:'',ConfirmPassword:''}}
                        validationSchema={signUpSchema}
                        onSubmit={(values,action)=>{
                            //action.resetForm();
                            //console.log(values);
                            submitSignUp(values);
                        }}
                        >
                        {(props)=>(
                            <View  style={styles.formikContainer}>
                                <Text>{isEmailExists ? "Email Already Exists" : <View></View>}</Text>
                                <View>
                                    <Text style={GlobalStyles.label}>First Name</Text>
                                    <TextInput 
                                        style={GlobalStyles.inputText}
                                        placeholder="First Name"
                                        onChangeText={props.handleChange("FirstName")}
                                        value={props.values.FirstName}
                                    />
                                    <Text style={GlobalStyles.errMsg}>{ props.touched.FirstName && props.errors.FirstName}</Text>
                                </View>
                                <View>
                                    <Text style={GlobalStyles.label}>Last Name</Text>
                                    <TextInput 
                                        style={GlobalStyles.inputText}
                                        placeholder="Last Name"
                                        onChangeText={props.handleChange("LastName")}
                                        value={props.values.LastName}
                                    />
                                     <Text style={GlobalStyles.errMsg}>{ props.touched.LastName && props.errors.LastName}</Text>
                                </View>
                                <View>
                                    <Text style={GlobalStyles.label}>Email</Text>
                                    <TextInput 
                                        style={GlobalStyles.inputText}
                                        placeholder="Email"
                                        onChangeText={props.handleChange("Email")}
                                        value={props.values.Email}
                                    />
                                     <Text style={GlobalStyles.errMsg}>{ props.touched.Email && props.errors.Email}</Text>
                                </View>
                                <View>
                                    <Text style={GlobalStyles.label}>Phone</Text>
                                    <TextInput 
                                        style={GlobalStyles.inputText}
                                        placeholder="Phone Number"
                                        keyboardType="number-pad"
                                        onChangeText={props.handleChange("PhoneNumber")}
                                        value={props.values.PhoneNumber}
                                    />
                                     <Text style={GlobalStyles.errMsg}>{ props.touched.PhoneNumber && props.errors.PhoneNumber}</Text>
                                </View>
                                <View>
                                    <Text style={GlobalStyles.label}>Alternate Phone</Text>
                                    <TextInput 
                                        style={GlobalStyles.inputText}
                                        placeholder="Alternate Phone Number"
                                        keyboardType="number-pad"
                                        onChangeText={props.handleChange("AlternatePhoneNumber")}
                                        value={props.values.AlternatePhoneNumber}
                                    />
                                     <Text style={GlobalStyles.errMsg}>{ props.touched.AlternatePhoneNumber && props.errors.AlternatePhoneNumber}</Text>
                                </View>
                                <View>
                                    <Text style={GlobalStyles.label}>Gender</Text>
                                    <View style={styles.radioContainer}>
                                    <RadioButton
                                        value={gender}
                                        status={ gender === 'male' ? 'checked' : 'unchecked' }
                                        onPress={() => setGender('male')}
                                        color="black"
                                    />
                                    <Text style={styles.radioBtn}>Male</Text>
                                    <RadioButton
                                        value={gender}
                                        status={ gender === 'female' ? 'checked' : 'unchecked' }
                                        onPress={() => setGender('female')}
                                        color="black"
                                    />                  
                                    <Text style={styles.radioBtn}>Female</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={GlobalStyles.label}>Password</Text>
                                    <TextInput 
                                        style={GlobalStyles.inputText}
                                        placeholder="Password"
                                        onChangeText={props.handleChange("Password")}
                                        value={props.values.Password}
                                        secureTextEntry={true}
                                    />
                                     <Text style={GlobalStyles.errMsg}>{ props.touched.Password && props.errors.Password}</Text>
                                </View>
                                <View>
                                    <Text style={GlobalStyles.label}>Retype Password</Text>
                                    <TextInput 
                                        style={GlobalStyles.inputText}
                                        placeholder="Confirm Password"
                                        onChangeText={props.handleChange("ConfirmPassword")}
                                        value={props.values.ConfirmPassword}
                                        secureTextEntry={true}
                                    />
                                     <Text style={GlobalStyles.errMsg}>{ props.touched.ConfirmPassword && props.errors.ConfirmPassword}</Text>
                                </View>
                                <View>
                                <Button
                                    title="Sign up"
                                    loading={btnLoading}
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
                                </View>
                            </View>
                        )}
                        </Formik>
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    );
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:AppConfig.primaryColor
    },
    formContainer:{
        marginTop:AppConfig.HEIGHT * 0.15,
        alignItems:"center"
    },
    headingText:{
        color:"white",
        fontFamily:"OpenSans-Bold",
        fontSize:22
    },
    formikContainer:{
        marginVertical:10
    },
    radioContainer:{
        flexDirection:"row"
    },
    radioBtn:{
        color:"white",
        paddingTop:6,
        fontFamily:"OpenSans-Regular",
        fontSize:15
    }
});