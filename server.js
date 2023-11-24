// Array of objects representing people
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 30 },
  { name: 'David', age: 65 },
  { name: 'Eva', age: 40 },
];

// Using reduce to find the average age
const totalAge = people.reduce((sum, person) => sum + person.age, 0);
const averageAge = totalAge / people.length;

console.log('Average Age:', averageAge);
// Output: Average Age: 35.4
