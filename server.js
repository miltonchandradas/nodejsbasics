// Array definition
let numbers = [1, 2, 3, 4, 5];

// Function to display array elements
const displayArray = (arr) => {
  console.log("Array:", arr.join(", "));
};

// Display original array
console.log("Original array:");
displayArray(numbers);

// Add an element to the end of the array
numbers.push(6);

// Display array after adding an element
console.log("\nArray after adding 6 to the end:");
displayArray(numbers);

// Remove the last element from the array
numbers.pop();

// Display array after removing the last element
console.log("\nArray after removing the last element:");
displayArray(numbers);

// Add an element to the beginning of the array
numbers.unshift(0);

// Display array after adding 0 to the beginning
console.log("\nArray after adding 0 to the beginning:");
displayArray(numbers);

// Remove the first element from the array
numbers.shift();

// Display array after removing the first element
console.log("\nArray after removing the first element:");
displayArray(numbers);

// Find the index of a specific element
const indexOfThree = numbers.indexOf(3);
console.log("\nThe index of 3 in the array:", indexOfThree);

// Slice the array to create a new array with specific elements
const slicedArray = numbers.slice(1, 4);
console.log("\nSliced array (from index 1 to 4):", slicedArray);
