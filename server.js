// Array of objects representing people
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 30 },
  { name: 'David', age: 15 },
  { name: 'Eva', age: 40 },
];

// Using map to get an array of names
const names = people.map((person) => person.name);

console.log(names);
// Output: ['Alice', 'Bob', 'Charlie', 'David', 'Eva']
