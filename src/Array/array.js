export const flattenArray = (arr) => {
    const duplicateArray = [];
    arr.forEach(item => {
        if (Array.isArray(item)) {
            item.forEach(subItem => {
                duplicateArray.push(subItem);
            });
        } else {
            duplicateArray.push(item);
        }
    });
    return duplicateArray;
};
export const intersectArrays = (arr1, arr2) => {
    const resultArray = [];
    arr1.forEach(item1 => {
        if (arr2.includes(item1) && !resultArray.includes(item1)) {
            resultArray.push(item1);
        }
    });
    return resultArray;
};

export const removeDuplicates = (arr1, arr2) => {
    const combinedArray = [...arr1, ...arr2];
    const resultArray = [];
    combinedArray.forEach(item => {
        if (!resultArray.includes(item)) {
            resultArray.push(item);
        }
    });
    return resultArray;
};