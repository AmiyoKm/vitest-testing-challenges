export const fibonacci =(n)=>{
    if(n<0){
        throw Error('Must not be a positive number')
    }
    else if(n===0){
        return 0
    }
    else if(n===1){
        return 1
    }
    return fibonacci(n-1)+ fibonacci(n-2)
}