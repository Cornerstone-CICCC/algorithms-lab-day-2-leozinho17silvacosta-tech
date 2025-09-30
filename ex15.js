// Exercise 15: Write a recursive function `findMax` that takes an array of numbers 
// and returns the maximum number in the array.
// Example: findMax([3, 1, 4, 1, 5, 9]) should return 9.

const findMax = (arr) => {
    if (arr.length === 1)
        return arr[0];

const otherMax = findMax(arr.slice(1));
        return arr[0] > otherMax ? arr[0] : otherMax;
};

console.log(findMax([3, 1, 4, 1, 5, 9])); // Expected output: 9