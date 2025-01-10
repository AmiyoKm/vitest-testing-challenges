export const mergedObject =( obj1 , obj2)=>{
    const merged = { ...obj2, ...obj1}
    return merged
}

export const deepClone =( obj1)=>{
    const clone = {...obj1}
    return clone
}
export const flattenObject = (obj, parentKey = '') => {
    let result = {}
    for (const key in obj){
        const newKey = parentKey ? `${parentKey}.${key}` : key

        if(obj[key] && typeof obj[key] === 'object'){
         result =  { ...result , ...flattenObject(obj[key] , newKey)}
        }
        else {
            result[newKey] = obj[key]
        }
    }

    return result;
};


