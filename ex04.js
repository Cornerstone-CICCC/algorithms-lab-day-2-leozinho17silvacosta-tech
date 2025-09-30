// Exercise 4: Write a function `mostFrequentChar` that takes a string and returns the character
// that appears the most times. If there is a tie, return the first character that reaches the maximum frequency.
// Example: mostFrequentChar("javascript") should return "a".

const mostFrequentChar = (str) => {
    const frequent = {};

    for (const char of str) {
        frequent[char] = (frequent[char] || 0) + 1;
    }

    let maximumChar = "";
    let maximumCount = 0;

    for (const char in frequent) {
        if (frequent[char] > maximumCount) {
        maximumCount = frequent[char];
        maximumChar = char;
    }
  }
    
   return maximumChar;
};

console.log(mostFrequentChar("javascript")); // Expected output: "a"