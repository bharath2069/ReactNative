import { useSelector } from "react-redux";


export default function GetEmailExistsStatus(){

    return useSelector(state=>state.Authorization.isEmailAlreadyExisted);
}