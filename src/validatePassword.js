export const validatePassword = (password) =>{
    if(password.length< 8 || password.length > 16){
        throw new Error("password must be between 8 and 16 Characters")
    }
    return "Password is valid"
}