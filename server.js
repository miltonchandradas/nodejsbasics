// Array of objects representing people
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 30 },
  { name: 'David', age: 15 },
  { name: 'Eva', age: 40 },
];

// Using find to get the person with name 'Charlie'
const charlie = people.find((person) => person.name === 'Charlie');

console.log(charlie);
// Output: { name: 'Charlie', age: 30 }
