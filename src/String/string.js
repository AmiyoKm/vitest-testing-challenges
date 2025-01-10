export const reversedString =(str )=>{
    return str.split("").reverse().join('')
}

export const capitalizeWords=(str)=>{
    return str.split(' ').map(word=> word.toUpperCase()).join(' ')
}

export const isPalindrome =(str)=>{
    if( str === str.split("").reverse().join('')){
        return true
    }
    else {
        return false
    }
}


