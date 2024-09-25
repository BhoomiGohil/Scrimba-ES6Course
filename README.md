# JavaScript ES6+ Features - Overview & Examples

This repository demonstrates modern JavaScript ES6+ features with examples. The key features covered include Template Literals, Destructuring, Spread and Rest Operators, Promises, Async/Await, Arrow Functions, Classes, and more.

## Features

### 1. **Template Literals**

Template literals provide an easier way to embed variables and expressions within strings using the backtick (`) syntax.

```javascript
let word1 = "Bhoomi";
let word2 = "Gohil";
const fullName = `Template Literals : ${word1} ${word2}`;
console.log(fullName);
```

### 2. **Destructuring Objects & Arrays**

Destructuring allows for easy extraction of values from objects and arrays.

```javascript
// Object destructuring
const player = {
  name: "Lebron James",
  club: "LA Lakers",
  address: { city: "Los Angeles" },
};
const {
  name,
  club,
  address: { city },
} = player;
console.log(`${name} plays for ${club} and lives in ${city}`);
```

```javascript
// Array destructuring
const [firstName, course, location2] = ["Dylan", "Coding God", "Israel"];
console.log(firstName, course, location2);
```

### 3. **Spread and Rest Operators**

The spread operator (`...`) expands arrays and objects, while the rest operator allows functions to accept an indefinite number of arguments.

```javascript
// Spread example
let contacts = ["Mary", "Joel", "Danny"];
let personalFriends = ["David", ...contacts, "Lily"];
console.log(personalFriends);

// Rest example
function add(...nums) {
  console.log(nums);
}
add(5, 5, 6, 3, 5);
```

### 4. **Arrow Functions**

Arrow functions provide a concise syntax for writing functions.

```javascript
const dinnerMenu = (food) => `I'm going to eat ${food} for dinner.`;
console.log(dinnerMenu("chicken salad"));
```

### 5. **Default Parameters**

Functions can have default parameters to handle cases where arguments are missing.

```javascript
const leadSinger = (artist = "Someone") => {
  console.log(`${artist} is the lead singer of Coldplay`);
};
leadSinger("Chris Martin");
leadSinger();
```

### 6. **Promises & Async/Await**

Promises simplify handling asynchronous operations, and async/await makes code more readable when working with promises.

```javascript
// Promise example
const userData = new Promise((resolve, reject) => {
  const error = false;
  if (error) {
    reject("500 Level Error");
  } else {
    resolve({ firstName: "Bhoomi", age: 28 });
  }
});
userData
  .then((success) => console.log(success))
  .catch((error) => console.log(error));
```

```javascript
// Async/Await example
async function photoUpload() {
  let uploadStatus = new Promise((resolve) => {
    setTimeout(() => {
      photos.push("Profile Pic");
      resolve("Photo Uploaded");
    }, 3000);
  });
  let result = await uploadStatus;
  console.log(result);
}
photoUpload();
```

### 7. **Classes & Inheritance**

Classes in ES6 bring OOP concepts to JavaScript. Classes support inheritance, static methods, and getters.

```javascript
class Animal {
  constructor(type, legs) {
    this.type = type;
    this.legs = legs;
  }
  makeNoise(sound = "Loud Noise") {
    console.log(sound);
  }
}
class Cat extends Animal {
  makeNoise(sound = "Meow") {
    console.log(sound);
  }
}
const cat = new Cat("Cat", 4);
cat.makeNoise();
```

### 8. **Let and Const**

`let` and `const` provide block scoping, unlike `var`, which is function-scoped. `const` prevents reassignment but allows mutation of arrays and objects.

```javascript
const example6 = {};
example6.firstName = "Bhoomi"; // Allowed: Mutating the object
console.log(example6);
```

### 9. **Other Features**

- **padStart & padEnd**: Pads strings to a specified length.
- **Includes**: Checks if an array contains a specific element.
- **For-of Loop**: Iterates over iterable objects like arrays or strings.
- **Sets**: A new data structure for storing unique values.

## How to Run

### 1. Clone the repository:

```bash
git clone https://github.com/BhoomiGohil/Javascript.git
```

### 2. Navigate to the project folder:

```bash
cd Javascript/Scribma/Introduction to ES6
```

### 3. Run the JavaScript file in node environment:

- **Node.js**: Run JavaScript files using Node.js in the terminal:

  ```bash
  node index.js
  ```

OR

### 3. Run the JavaScript file using browser:

- **Browser**: Open the `.html` file in a browser to see the code execution.

OR

### 3. Run Using Live Server

To make it easier to test and view the output in the browser, you can use **Live Server** in VS Code.

- Install the Live Server extension in Visual Studio Code:

  1. Open VS Code.
  2. Go to the Extensions view (Ctrl+Shift+X) and search for "Live Server".
  3. Install the Live Server extension.

- Run the project:
  1. Right-click the `index.html` file.
  2. Select **"Open with Live Server"**.
  3. The browser will open automatically and serve the page, reflecting any changes you make in real-time.

---

This project demonstrates key ES6+ JavaScript features that enhance code readability, reusability, and maintainability. You can explore the included code snippets and test the functionality in any modern browser, Node.js environment, or with Live Server.
