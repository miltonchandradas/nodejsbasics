// Array of objects representing people
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 30 },
  { name: 'David', age: 65 },
  { name: 'Eva', age: 40 },
];

// Using some to check if there are any senior citizens
const hasSeniorCitizen = people.some((person) => person.age >= 65);

if (hasSeniorCitizen) {
  console.log('There is at least one senior citizen.');
} else {
  console.log('There are no senior citizens.');
}
// Output: There is at least one senior citizen.
