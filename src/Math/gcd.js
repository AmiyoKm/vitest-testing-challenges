export const gcd =(a,b)=>{
    if( a ===0 && b===0){
        throw Error ('Both are zero , the GCD is undefined')
    }
    else if(a===0||b===0){
        return a ===0 ? b : a
    }
    else if(a===b){
        return a
    }
   return  a > b ? gcd(a%b , b) : gcd(a,b%a)
}

console.log(gcd(6,6));
