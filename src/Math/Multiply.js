export const multiply =(a,b)=>{
    if(typeof a!='number' || typeof b!='number'){
        throw new Error("both values must be numbers")
    }
    return a*b
}