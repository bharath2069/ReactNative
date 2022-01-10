import { UPDATE_USERSTATE } from "../actions/Auth";
import UserModel from "../../model/UserModel";
import { SIGNUP_USER } from "../actions/Auth";

const initialAuthState={
    userDetails:[],
    isEmailAlreadyExisted:false
}

export const UserDetails=(state=initialAuthState,action)=>{
    switch(action.type){
        case UPDATE_USERSTATE:
            var userdata=new UserModel("1",action.data.username,action.data.username,"email","123456789");
            state.userDetails.push(userdata);
            return state;
        case SIGNUP_USER:
            //console.log(action.data);
            if(action.data.isEmailAlreadyExisted){
                return {
                    ...state,
                    isEmailAlreadyExisted:action.data.isEmailAlreadyExisted
                }
            }else{
                var userDetails = new UserModel(action.data.UserId,action.data.FirstName,action.data.LastName,action.data.Email,
                    action.data.PhoneNumber,action.data.Gender,action.data.AlternatePhoneNumber,action.data.isActive);
                    return {
                        ...state,
                        userDetails:userDetails,
                        isEmailAlreadyExisted: action.data.isEmailAlreadyExisted
                    }
            }
        default:
            return state;
    }
}
