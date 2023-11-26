// Array of objects representing people
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
  { name: "David", age: 15 },
  { name: "Eva", age: 40 },
];

// Using forEach to log the names to the console
people.forEach((person) => {
  console.log(person.name);
});
// Output:
// Alice
// Bob
// Charlie
// David
// Eva

console.log("\n");

// function
const displayNames = (person) => {
  console.log(person.name);
};

// Using forEach to log the names to the console
people.forEach(displayNames);
// Output:
// Alice
// Bob
// Charlie
// David
// Eva
