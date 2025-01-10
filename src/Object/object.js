export const mergedObject =( obj1 , obj2)=>{
    const merged = { ...obj2, ...obj1}
    return merged
}

export const deepClone =( obj1)=>{
    const clone = {...obj1}
    return clone
}
export const flattenObject = (obj, result = {}, parentKey = '') => {
    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            flattenObject(obj[key], result); // No concatenation for keys
        } else {
            result[key] = obj[key]; // Store only the unique key
        }
    }
    return result;
};