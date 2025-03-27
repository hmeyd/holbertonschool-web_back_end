# ES6 Basics

## Description
This project covers the fundamental concepts of ECMAScript 6 (ES6). The focus is on understanding and implementing modern JavaScript features such as block-scoped variables, arrow functions, template literals, spread/rest syntax, object property shorthand, and iterators.

## Learning Objectives
By the end of this project, you should be able to:
- Explain what ES6 is and its new features.
- Differentiate between `const`, `let`, and `var`.
- Utilize block-scoped variables.
- Implement arrow functions and default parameters.
- Use rest and spread syntax in functions.
- Implement string templating with template literals.
- Create and manipulate objects using ES6 features.
- Utilize iterators and `for...of` loops.
- Understand and use destructuring assignment.
- Work with ES6 classes and inheritance.

## Requirements
- All files will be interpreted/compiled on **Ubuntu 20.04 LTS** using **Node.js 20.x.x** and **npm 9.x.x**.
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`.
- All files should end with a new line.
- **A `README.md` file at the root of the project is mandatory.**
- All JavaScript files should have a `.js` extension.
- Code will be tested using **Jest Testing Framework**.
- Code will be analyzed using **ESLint** with specific rules provided.
- All functions must be exported.

## Setup
### Install Node.js 20.x.x
```bash
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```
Verify installation:
```bash
nodejs -v
npm -v
```

### Install Dependencies
In your project directory, install the following dependencies:
```bash
npm install --save-dev jest
npm install --save-dev babel-jest @babel/core @babel/preset-env
npm install --save-dev eslint
```

### Configuration Files
#### `package.json`
Ensure your `package.json` is correctly set up for Jest and Babel.

#### `babel.config.js`
```javascript
module.exports = {
  presets: ["@babel/preset-env"],
};
```

#### `.eslintrc.js`
```javascript
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: "module",
  },
  rules: {},
};
```

### Install Project Dependencies
Run the following command:
```bash
npm install
```

## Tasks Overview

### Task 0: Const or Let?
Modify functions to use `const` and `let` appropriately.

### Task 1: Block Scope
Ensure variables are not overwritten using `let` or `const`.

### Task 2: Arrow Functions
Convert functions to use arrow function syntax.

### Task 3: Default Parameters
Refactor a function to use default parameter values.

### Task 4: Rest Parameter Syntax
Modify a function to use rest parameters to count arguments.

### Task 5: Spread Syntax
Concatenate arrays and strings using spread syntax.

### Task 6: Template Literals
Rewrite a function to use template literals.

### Task 7: Object Property Shorthand
Use property shorthand syntax in an object.

### Task 8: Computed Property Names
Use ES6 computed property names.

### Task 9: ES6 Method Properties
Refactor an object to use ES6 method properties.

### Task 10: For...of Loops
Rewrite a function to use `for...of` loops instead of `for...in`.

### Task 11: Iterator
Create an object with a department name and list of employees.

### Task 12: Report Object
Create an object with department employees and a method to count departments.

### Task 13: Destructuring Assignment
Use destructuring assignment to extract values from objects and arrays.

### Task 14: ES6 Classes
Define classes and implement inheritance using ES6 syntax.

## Execution
Run the project files with:
```bash
npm run dev <file-name.js>
```
Run tests using Jest:
```bash
npm test
```

## Repository
- **GitHub Repository:** `holbertonschool-web_back_end`
- **Directory:** `ES6_basic`
