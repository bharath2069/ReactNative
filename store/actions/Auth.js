export const UPDATE_USERSTATE="UPDATE_USERSTATE";
export const SIGNUP_USER="SIGNUP_USER";


export const UpdateUserDetails=(userdetails)=>{
    return {type:UPDATE_USERSTATE,data:userdetails};
}

export const SignUpUser=(userdata)=>{
    return dispatch=>{
        var resData;
        fetch("http://192.168.1.6:8082/api/ECommerce/SignUp",{
            method:"POST",
            headers:{
                'content-type':"application/json",
                'Accept': 'application/json',
            },
            body:JSON.stringify(userdata)
        })
        .then(response=>response.json())
        .then(res=>{
            //console.log(res);
            if(res.isEmailAlreadyExisted){
                console.log("inside redux thunk");
                resData=res;
                //return res;
            }
            else{
                resData=JSON.parse(res.data);
            }
            // dispatch({type:SIGNUP_USER,data:resData});
        })
        .catch(err=>{
            console.log(err);
        }).finally(fin=>{
            return resData;
        });
        //return resData;
        // fetch("http://192.168.1.5:8082/api/ECommerce/GetCategory")
        // .then(result=> result.json())
        // .then((res) => {         console.log(res);       })
        // .catch(err=>console.log(err));
        //dispatch({type:SIGNUP_USER,data:userdata});
    };
}