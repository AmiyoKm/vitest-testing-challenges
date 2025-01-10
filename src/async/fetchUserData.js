export const fetchUserData = async(userId)=>{
    if(userId ==="Invalid"){
        return Promise.reject("User not found")
    }
    return Promise.resolve({id: userId , name : "Amiyo Kumar"})
}