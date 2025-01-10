export const factorial = (n) => {
    if (n < 0) {
        throw new Error('Must not be a negative number');
    }
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
};