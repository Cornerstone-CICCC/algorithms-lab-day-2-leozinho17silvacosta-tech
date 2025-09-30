// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.

const countConsonants = (str) => {
    const lowerStr = str.toLowerCase()
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;

    for (let i = 0; i < lowerStr.length; i++) {
        const char = lowerStr[i];

    if (char >= "a" && char <= "z" && !vowels.includes(char)) {
        count++
    }
}

return count;

};

console.log(countConsonants("hello world")); // Expected output: 7