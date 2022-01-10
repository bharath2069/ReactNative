class UserModel{
    constructor(UserId,FirstName,LastName,Email,PhoneNumber,Gender,AlternatePhoneNumber,isActive){
        this.UserId=UserId;
        this.FirstName=FirstName;
        this.LastName=LastName;
        this.Email=Email;
        this.PhoneNumber=PhoneNumber;
        this.Gender=Gender;
        this.AlternatePhoneNumber=AlternatePhoneNumber;
        this.isActive = isActive;
    }
}

export default UserModel;