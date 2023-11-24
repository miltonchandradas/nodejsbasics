// function
const isEven = (number) => {
  // Use the modulo operator (%) to check if the number is even
  if (number % 2 === 0) {
    return true; // The number is even
  } else {
    return false; // The number is odd
  }
};

// Example usage
var num1 = 10;
var num2 = 7;

console.log(`${num1} is even: ${isEven(num1)}`);
console.log(`${num2} is even: ${isEven(num2)}`);
