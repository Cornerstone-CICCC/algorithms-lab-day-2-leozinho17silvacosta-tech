// Exercise 10: Write a function `convertToCamelCase` that takes a string
// with words separated by spaces or underscores, and returns the string in camelCase format.
// Example: convertToCamelCase("hello_world") should return "helloWorld".

const convertToCamelCase = (str) => {
    const words = str.split(/[_ ]/);

    const camelCase = words.map((word, index) => {
    if (index === 0) return word.toLowerCase(); 
       return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();    
    }).join("");

    return camelCase;
};

console.log(convertToCamelCase("hello_world")); // Expected output: "helloWorld"