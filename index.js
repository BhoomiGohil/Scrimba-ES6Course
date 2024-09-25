// ------------------------ Template Literals ----------------------

let word1 = "Bhoomi";
let word2 = "Gohil";

// Using template literals for string interpolation
const fullName = `Template Literals : ${word1} ${word2}`; // ` ` Template Literals

console.log(fullName); // Output the full name

console.log("\n"); // Print a new line for separation

// ------------------------ Destructuring objects ------------------------

// Example 1
console.log("Destructuring Objects : "); // Heading for this section

// Object representing a player
const player = {
  name: "Lebron James",
  club: "LA Lakers",
  address: {
    city: "Los Angeles", // Nested object for address
  },
};

// Old way of accessing object properties
console.log(
  "Object : " +
    player.name +
    " plays for " +
    player.club +
    " he lives in " +
    player.address.city // Accessing nested property
);

// Destructuring the object to extract values directly
const {
  name,
  club,
  address: { city }, // Nested destructuring
} = player;

// Using template literals to format the output
console.log(`Destructuring : ${name} plays for ${club} he lives in ${city}`); // ES6

// Example 2

// Object representing a student
const student = {
  name2: "Kyle",
  age: 24,
  projects: { diceGame: "Two player dice game using Javascript" },
};

// Old way of accessing object properties
console.log(
  "Object : My name is " +
    student.name2 +
    " and I am " +
    student.age +
    " years old and working on " +
    student.projects.diceGame // Accessing nested property
);

// Destructuring the object to extract values directly
const {
  name2,
  age,
  projects: { diceGame }, // Nested destructuring
} = student;

// Using template literals to format the output
console.log(
  `Destructuring : My name is ${name2} and I am ${age} years old and working on ${diceGame}`
);

console.log("\n"); // Print a new line for separation

// ------------------------ Destructuring Arrays ------------------------

const [firstName, course, location2] = ["Dylan", "Coding God", "Israel"]; // Destructuring an array

// Output the destructured values
console.log("Destructuring Arrays : " + firstName, course, location2);

console.log("\n"); // Print a new line for separation

// ------------------------ Object Literal ------------------------

console.log("Object Literal :");

// Function to create an address object
function addressMaker(city, state) {
  const newAddress = { city: city, state: state }; // Old Version with explicit property assignment
  const newAddress2 = { city, state }; // ES6 shorthand property assignment
  console.log("Old Version :", newAddress);
  console.log("ES6 Version :", newAddress2);
}

// Call the function with parameters
addressMaker("Austin", "Texas");

// Another function to demonstrate destructuring
function addressMaker2(address) {
  // Method 1: Creating an object without destructuring
  let newAddress = {
    city: address.city,
    state: address.state,
    country: "United States", // Hardcoded country value
  };

  console.log("Whole Object value :", newAddress);

  // Method 2: Using destructuring to extract properties
  const { city, state } = address; // Destructuring object

  newAddress = {
    city,
    state,
    country: "United States", // Hardcoded country value
  };

  console.log(
    "Destructuring object : ",
    newAddress.city,
    newAddress.state,
    newAddress.country
  );
  console.log("Whole Object value : ", newAddress); // Output the new address object
}

// Call the function with an address object
addressMaker2({ city: "Austin", state: "Texas" });

console.log("\n"); // Print a new line for separation

// ------------------------ For of Loop ------------------------

console.log("Loop :"); // Heading for this section

let incomes = [62000, 67000, 75000]; // Array of incomes
let total = 0; // Initialize total

// Looping through incomes using for...of
for (const income of incomes) {
  console.log("Income :", income); // Output each income
  total += income; // Accumulate total
}

console.log("Total :", total); // Output the total income

let fullName2 = "Bhoomi Gohil";

// Looping through characters of the string
for (const char of fullName2) {
  console.log("Character :", char); // Output each character
}

// Array of student objects
const students = [
  {
    name: "John",
    city: "New York",
  },
  {
    name: "Peter",
    city: "Paris",
  },
  {
    name: "Kate",
    city: "Sidney",
  },
];

// Looping through students and outputting details
for (const student of students) {
  console.log(`Student Detail : ${student.name} lives in ${student.city}`);
}

console.log("\n"); // Print a new line for separation

// ------------------------ Spread Operator ------------------------

console.log("Spread Operator :"); // Heading for this section

let contacts = ["Mary", "Joel", "Danny"]; // Array of contacts

console.log("Contact :", contacts); // Output the contacts

// Creating a new array with additional contacts using spread operator
let personalFriends = ["David", ...contacts, "Lily"];

contacts.push("John"); // Adding to original contacts array

// Output the new array
console.log("Add contact using Spread Operator : ", personalFriends);

let person = {
  name: "Adam",
  age: 25,
  city: "Manchester",
};

// Creating a new object with additional properties using spread operator
let employee = {
  ...person,
  salary: 50000,
  position: "Software Developer",
};

// Array of shopping items
const shoppingList = ["eggs", "milk", "butter"];
// Creating a new shopping basket with additional items
const shoppingBasket = [...shoppingList, "bread", "pasta"];

console.log("Add items using Spread Operator : ", shoppingBasket);

console.log("\n"); // Print a new line for separation

// ------------------------ Rest Operator ------------------------

console.log("Rest Operator :"); // Heading for this section

// Function that accepts any number of arguments using rest operator
function add(...nums) {
  // ...nums collects all arguments into an array
  console.log(nums); // Output the array of numbers
}

// Call the function with multiple numbers
add(5, 5, 6, 3, 5);

console.log("\n"); // Print a new line for separation

// ------------------------ Arrow Functions ------------------------

console.log("Arrow Functions :"); // Heading for this section

// Function declaration
function breakfastMenu() {
  return "I'm going to scrambled eggs for breakfast."; // Return breakfast message
}

// Anonymous function expression
const lunchMenu = function () {
  return "I'm going to eat pizza for lunch."; // Return lunch message
};

// Arrow function for dinner menu
const dinnerMenu = (food) => `I'm going to eat a ${food} for dinner.`;

// Call the arrow function with a food item
console.log(dinnerMenu("chicken salad"));

console.log("\n"); // Print a new line for separation

// ------------------------ Defaults Params ------------------------

console.log("Defaults Params :"); // Heading for this section

// Arrow function with default parameter
const leadSinger = (artist = "Someone") => {
  console.log(`${artist} is the lead singer of Cold Play`);
};

// Call the function with a specific artist
leadSinger("Chris Martin"); // Chris Martin is the lead singer of Cold Play
leadSinger(); // Someone is the lead singer of Cold Play

// Function with default parameter for food shopping
function foodShopping(food = "Something") {
  console.log(`I'm going to buy ${food} from the grocery shop`);
}

// Call the function with a specific food item
foodShopping("eggs");

console.log("\n"); // Print a new line for separation

// ------------------------ Includes ------------------------

console.log("Includes :"); // Heading for this section

let numArray = [1, 2, 3, 4, 5]; // Array of numbers
console.log(numArray.includes(5)); // Check if 5 is included in the array

const listIngredients = ["flour", "sugar", "eggs", "butter"];

// Check for a specific ingredient in the list
if (listIngredients.includes("chocolate")) {
  console.log("We are going to make a chocolate cake");
} else {
  console.log(
    "We can't make a chocolate cake because we are missing the ingredient chocolate"
  );
}

console.log("\n"); // Print a new line for separation

// ------------------------ Let & Const ------------------------

console.log("Let and Const :"); // Heading for this section

// Example of var scope
if (false) {
  var example = 5; // 'var' is function-scoped
}

// console.log(example); // This would be undefined as the block doesn't execute

var example2;

if (false) {
  example2 = 5; // 'var' is hoisted but not initialized
}

// console.log(example2); // This would be undefined

if (false) {
  let example3 = 5; // 'let' is block-scoped
}

// console.log(example3); // This would throw an error as example3 is not defined

const example4 = 5;
// example4 = 10; // This would throw an error as constants cannot be reassigned

const example5 = [];
example5.push(5); // Allowed as we can mutate the array

const example6 = {};
example6.firstName = "Bhoomi"; // Allowed as we can mutate the object

console.log(example6); // Output the object

console.log("\n"); // Print a new line for separation

// ------------------------ padStart & padEnd ------------------------

let example7 = "Bhoomi";

// Pad the string on the left
console.log("padStart :", example7.padStart(10, "i")); // Adds 'i' until the total length is 10
// Pad the string on the right
console.log("padEnd :", example7.padEnd(10, "i")); // Adds 'i' until the total length is 10

console.log("\n"); // Print a new line for separation

// ------------------------ Classes ------------------------

console.log("Classes :"); // Heading for this section

// Base class for animals
class Animal {
  constructor(type, legs) {
    this.type = type; // Type of the animal
    this.legs = legs; // Number of legs
  }

  makeNoise(sound = "Loud Noise") {
    console.log("Make Noise :", sound); // Method to make noise
  }

  static return10() {
    // Static method accessible without instantiation
    return 10;
  }

  get metaData() {
    // Getter for metadata
    return `${this.type}, ${this.legs}`;
  }
}

// Derived class from Animal
class Cat extends Animal {
  makeNoise(sound = "Meow") {
    console.log("Make Noise :", sound); // Override noise method
  }
}

// Creating an instance of Animal
let cat = new Animal("Cat", 4);

console.log("Type :", cat.type); // Output the type of animal
console.log("Leg :", cat.legs); // Output the number of legs

cat.legs = 2; // Changing the number of legs

console.log("Type :", cat.type); // Output the type of animal
console.log("Leg :", cat.legs); // Output the updated number of legs

cat.makeNoise(); // Call the makeNoise method
cat.makeNoise("Hehe"); // Call with a specific sound

console.log("Return :", Animal.return10()); // Call static method
console.log("MetaData :", cat.metaData); // Output the metadata

// Creating another instance of Cat
let cat2 = new Cat("Cat", 4);

console.log("Type, Legs :", cat2); // Output the type and legs

cat2.makeNoise(); // Call the overridden method
console.log("MetaData :", cat2.metaData); // Output the metadata

console.log("\n"); // Print a new line for separation

// ------------------------ Classes with super ------------------------

console.log("Classes with super :"); // Heading for this section

// Base class for players
class Player {
  constructor(name, country) {
    this.name = name; // Player's name
    this.country = country; // Player's country
  }

  introduce() {
    console.log(`Introduction : ${this.name} was born in ${this.country}`); // Introduce the player
  }
}

// Derived class from Player
class TennisPlayer extends Player {
  constructor(name, country, age) {
    super(name, country); // Call the parent constructor
    this.age = age; // Additional property for age
  }

  playTennis() {
    console.log(
      `Introduction : ${this.name} is ${this.age} years old and knows how to play Tennis`
    ); // Introduce the tennis player
  }
}

// Creating an instance of Player
const messi = new Player("Messi", "Argentina");
console.log("Player :", messi.name, messi.country); // Output player's name and country
messi.introduce(); // Introduce the player

// Creating an instance of TennisPlayer
const roger = new TennisPlayer("Roger Federer", "Spain", 38);
console.log("Player :", roger.name, roger.country, roger.age); // Output player details
roger.playTennis(); // Introduce the tennis player
roger.introduce(); // Introduce the player

console.log("\n"); // Print a new line for separation

// ------------------------ Trailing Commas ------------------------

console.log("Trailing Commas :"); // Heading for this section

// Function demonstrating trailing commas
function add(param1) {
  const example = {
    name: "Dylan", // Trailing comma after the last property
  };
  console.log(example); // Output the example object
}

add(2); // Call the function

console.log("\n"); // Print a new line for separation

// ------------------------ Promises ------------------------

console.log("Promises :"); // Heading for this section

// Creating a promise for user data
const userData = new Promise((resolve, reject) => {
  const error = false; // Simulating no error
  if (error) {
    reject("500 Level Error"); // Reject promise if error occurs
  } else {
    // Resolve promise with user data
    resolve({
      firstName: "Bhoomi",
      age: 28,
      email: "bhoomikgohil@hotmail.com",
    });
  }
});

// Handling promise resolution and rejection
userData
  .then((success) => console.log(success)) // Log success data
  .catch((error) => console.log(error)); // Log error if it occurs

// Function to simulate flight ticket purchase
const buyFlightTicket = () => {
  return new Promise((resolve, reject) => {
    const error = false; // Simulating no error
    if (error) {
      reject("Sorry your payment was not successful"); // Reject promise if error occurs
    } else {
      resolve("Thank you, your payment was successful"); // Resolve promise on success
    }
  });
};

// Handling promise resolution and rejection for ticket purchase
buyFlightTicket()
  .then((success) => console.log(success)) // Log success message
  .catch((error) => console.log(error)); // Log error if it occurs

console.log("\n"); // Print a new line for separation

// ------------------------ Fetch ------------------------

console.log("Fetch :"); // Heading for this section

// Fetching data from an API
fetch("https://jsonplaceholder.typicode.com/comments/1")
  .then((response) => response.json()) // Convert response to JSON
  .then((data) => console.log(data)); // Log the fetched data

// Fetching data again for demonstration
fetch("https://jsonplaceholder.typicode.com/comments/1")
  .then((response) => response.json()) // Convert response to JSON
  .then((data) => console.log(data)); // Log the fetched data

// Posting data to an API
fetch("https://jsonplaceholder.typicode.com/comments", {
  method: "POST",
  body: JSON.stringify({
    name: "Comment 105", // Data to be sent
    email: "gmail.com",
    body: "hbsdgvh hj hsvhj",
  }),
});

console.log("\n"); // Print a new line for separation

// ------------------------ Async & Await ------------------------

console.log("Async & Await :"); // Heading for this section

const photos = []; // Array to hold photos

// Async function to simulate photo upload
async function photoUpload() {
  let uploadStatus = new Promise((resolve) => {
    setTimeout(() => {
      photos.push("Profile Pic"); // Add photo after delay
      resolve("Photo Uploaded"); // Resolve promise after upload
    }, 3000); // Simulated upload delay
  });

  let result = await uploadStatus; // Wait for upload to complete

  console.log(result); // Log the result
  console.log(photos.length); // Log the number of photos
  console.log(photos); // Log the photos array
}

// Call the photo upload function
photoUpload();

// API URL for fetching jokes
const apiUrl = "https://api.chucknorris.io/jokes/random";

// Async function to fetch a joke
async function getJoke() {
  const response = await fetch(apiUrl); // Await fetch response
  const data = await response.json(); // Await JSON conversion

  console.log(data.value); // Log the joke
}

// Call the function to get a joke
getJoke();

console.log("\n"); // Print a new line for separation

// ------------------------ Sets in ES6 ------------------------

console.log("Sets :"); // Heading for this section

// Creating a set with unique values
const exampleSet = new Set([1, 2, 3, 3, 2, 4, 1, 5]);

console.log("Sets :", exampleSet); // Output the set

exampleSet.add(5); // Add new value to the set
exampleSet.add(17).add(18); // Add multiple values using chaining

console.log("Add Value : ", exampleSet); // Output the updated set

exampleSet.delete(1); // Delete a value from the set

console.log("Delete :", exampleSet); // Output the set after deletion

// Check if a value exists in the set
exampleSet.has(4); // Returns true if 4 is in the set
console.log("Has", exampleSet); // Log the presence of the value

exampleSet.clear(); // Clear all values from the set

console.log("Clear : ", exampleSet); // Output the empty set
console.log("Size :", exampleSet.size); // Check the size of the set
