// Array of objects representing people
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 30 },
  { name: 'David', age: 15 },
  { name: 'Eva', age: 40 },
];

// Using filter to get adults (age >= 18)
const adults = people.filter((person) => person.age >= 18);

console.log(adults);
// Output: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 30 }, { name: 'Eva', age: 40 }]
