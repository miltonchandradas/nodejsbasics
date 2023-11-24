// Object definition
let person = {
  name: "John Doe",
  age: 25,
  city: "Example City",
};

// Function to display information about the person using template literals
const displayPersonInfo = (person) => {
  console.log(`Name: ${person.name}`);
  console.log(`Age: ${person.age}`);
  console.log(`City: ${person.city}`);
};

// Display original information about the person
console.log("Original information:");
displayPersonInfo(person);

// Manipulate the object: Add a new property and update an existing one
person.email = "john.doe@example.com";
person.age = 26;

// Display updated information about the person
console.log("\nUpdated information:");
displayPersonInfo(person);
