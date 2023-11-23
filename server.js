// string
let name = "Milton";

// number
let age = 49;

// boolean
let isMarried = true;

// object: key - value pair
let car = {
  model: "Honda",
  make: "Accord",
  year: "2023",
};

// array object
let hobbies = ["Chess", "Soccer", "Tennis"];

// date object
let dateOfBirth = new Date("1974-03-07");

// function
const printMyInfo = (name, age, hobbies) => {
  console.log(`
    My name is ${name}
    I am ${age} years old
    My hobbies are ${hobbies}`);
};

printMyInfo(name, age, hobbies);
