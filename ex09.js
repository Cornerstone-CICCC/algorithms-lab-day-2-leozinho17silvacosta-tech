// Exercise 9: Write a function `sortByProperty` that takes an array of objects
// and a property name, and returns the array sorted by that property in ascending order.
// Example: sortByProperty([{name: "Alice", age: 30}, {name: "Bob", age: 25}], "age")
// should return [{name: "Bob", age: 25}, {name: "Alice", age: 30}].

const sortByProperty = (arr, property) => {
    return arr.sort((a, b) => {

        if (typeof a[property] === "number" && typeof b[property] === "number") {
            return a[property] - b[property];
        }

        if (typeof a[property] === "string" && typeof b[property] === "string") {
            return a[property].localeCompare(b[property]);
        }

        return 0;
    });
};

    const people = [
        { name: "Alice", age: 30 },
        { name: "Bob", age: 25}
    ];

console.log(sortByProperty([{name: "Alice", age: 30}, {name: "Bob", age: 25}], "age")); // Expected output: [{name: "Bob", age: 25}, {name: "Alice", age: 30}]