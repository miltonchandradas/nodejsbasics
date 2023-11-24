// Array of objects representing people
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 30 },
  { name: 'David', age: 65 },
  { name: 'Eva', age: 40 },
];

// Using every to check if all people are senior citizens
const allAreSeniorCitizens = people.every((person) => person.age >= 65);

if (allAreSeniorCitizens) {
  console.log('All people are senior citizens.');
} else {
  console.log('Not all people are senior citizens.');
}
// Output: Not all people are senior citizens.
