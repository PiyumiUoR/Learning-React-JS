# Learning-React-JS

This repository contains the exercises done by me during the Udemy course "React JS Frontend Web Development for Beginners" by Ryan Dhungel. 

Link to the course is [here.](https://www.udemy.com/share/101rkI3@zMJhoBQX62DEpDKqhDh4Nq8DCl1wR1sLTXoIBZfNaJEtlFf0DKuzaPrA6jxET6DPOA==/)

# Modern Javascript

## Variable types

There are 2 variable types.
1. const
2. let

If the variable value is not to be changed overtime, the _const_ is to be used. Instead of `var name = 'Piyumi';` we can use `const name = 'Piyumi';` for the variable definition. 

```js
const name = 'Piyumi';
alert(name);
```

If the variable is only meant to be inside the scope that the variable has been defined, _let_ is being used. Below is an example. 

```js
if (true){
    var name = 'Piyumi';
}
alert(name)
```
Above code is works in javascript and pops out the name variable into the window. The variable can be accessed and valid inside the whole code. Below is the console image that to prove that the variable can be accessed from outside of the _if_ statement. 

![var variable inside 'if'](./images/1.JPG)

If _let_ is used, the variable name is only accepted inside of the defined scope and the varibale name still can be used outside the defined statements. 

```js
if (true){
    let name = 'Piyumi';
    // alert(name);
}

alert(name);
```

Below image shows that the varibale cannot be accessed throught the _window_ which means that the variable is not valid outside the _if_ statement. 

![let variable inside 'if'](./images/2.JPG)

## Template strings

Template strings are used as an alternative for _string concatenation_. Here, the lecturer shows the old way of string concatenation and using the template strings. 

```js
let fname = 'Piyumi';
let lname = 'W';
let age = prompt("Guess Piyumi's age..");

// //old way
// let result = fname + ' ' + lname + ' '+ 'is ' + age + ' ' + 'years old.';
// alert(result);

//template strings
let result = `${fname} ${lname} is ${age} years old.`;
alert(result);
```
This method is useful in situations where we have to call URLs and endpoints from APIs. Both ways gives the same result as shown in below images. 

![template strings 1](./images/3.JPG)
![template strings 2](./images/4.JPG)

## Default parameters

This is an option of ES6 update to passing deafult parameters to function arguments and more. 

Define the function as below at first with no default values. 

```js
function welcome(user, message){
    alert(`Hello ${user}, ${message}`)
}

welcome('Piyumi', 'Welcome!')
```

The output is something like below. 

![default parameters 1](./images/5.JPG)

The output is generated as expected. But, if we call the function with no arguments as in `welcome()`, the output is generated as below. 

![default parameters 2](./images/6.JPG)

To avoid this situation, we define some default parameters when defining the function. 

```js
function welcome(user="mystery user", message="Good bye!"){
    alert(`Hello ${user}, ${message}`)
}
// welcome('Piyumi', 'Welcome!')
welcome();
```

When the function is called with no arguments, the output is generated with the default values. 

![default parameters 3](./images/7.JPG)

## Arrow function

These are different from the regular functions. The sample regular function looks like below. 

```js
function greeting(message){
    return alert(`${message} everyone`);
}

greeting("Good morning");
```

The same function can be written as an _arrow function_ like below. 

```js
let greeting = message => alert(`${message} everyone`);

greeting("Good morning");
```

The output is same for both of the ways. 

![arrow func](./images/8.JPG)

When there is only one input arguments, _message_ can be used without the paranthesis _( )_. Below is an another example with multiple arguments and statements.

```js
let createBlog = (title, body) => {
    if (!title) {
        throw new Error('A title is required');
    }
    if (!body) {
        throw new Error('Body cant be empty');
    }
    
    return alert(`${title} - ${body}`);
};

createBlog('new title', 'new body');
```

The output for above code is as follows. 

![arrow func 2](./images/9.JPG)

If there are no arguments, the arrow function can be defined as below. 

```js
let greeting = () => alert(`Hello everyone`);

greeting();
```

## Arrow function and _this_ function

In JavaScript when we create a function they become a part of the global _window_ object and when you use _this_ keyword it refers to the enclosing context. Using _this_ keyword ensures that it refers to the function within the function within the two curly braces. Below is an example where the function has become a method inside of the _window_ object and how the keyword _this_ has been used to directly access the _window_ object. 

***Before: ***

```js
function sayHi(){
    //
}

```
![this func 1](./images/10.JPG)

The window is not directly logged in the console window unless we look for it using the console. 

```js
function sayHi(){
    //
}

console.log(this);
```

![this func 2](./images/11.JPG)

![sayHi func 3](./images/12.JPG)

Here the _window_ is directly logged in the console and we can see the _sayHi_ function inside of it. 

The _this_ keyword should be used causiously. The contat of _this_ can be changed according to the place we out that into. Below examples shows how _this_ is acted accrding to the location and why it should not be used as such. 

```js
let nepal = {
    // add property
    mountains: ['Everest', 'Fish Tail', 'Annapurna'],

    // add method
    printWithDash: function() {
        console.log('Inside printWithDash', this)
        setTimeout(function() {
            // console.log(this.mountains.join(' - '))
            console.log('Inside setTimeout', this)
        }, 2000);
    }
}

nepal.printWithDash();
```

![this 1](./images/13.JPG)

The definition of _this_ has been changed even though we used it inside the _nepal_ main object and same object _printWithDash_. This is where the usage of ***_arrow_*** function comes into the picture. Arrow function can help defining the keyword _this_ under a single whole function. 

```js
let nepal = {
    // add property
    mountains: ['Everest', 'Fish Tail', 'Annapurna'],

    // add method
    printWithDash: function() {
        // console.log('Inside printWithDash', this)
        setTimeout(() => console.log(this.mountains.join(' - ')), 2000)
            // console.log('Inside setTimeout', this)       
    }
}

nepal.printWithDash();
```

![this 1](./images/14.JPG)

## Destructuring objects

This is a way of breaking down obects or arrays into variables. Below example shows how it works. 

```js
let thingsToDo = {
    morning: "Exercise",
    afternoon: "Work",
    evening: "Code",
    night: ["sleep", "dream"]
}

let {morning, afternoon} = thingsToDo; //object destructuring

console.log(morning, ' - ', afternoon)
```

The outout in the console shows that the _morning_ and _afternoon_ can be considered as seperate variables after the object destructuring.  

![obj des 1](./images/15.JPG)

Below is a bit complex example.

**Method 1:**

```js
let uniStudent = student => {
    // let {name, university } = student;
    console.log(`${student.name} from ${student.university}`);
};

uniStudent({ 
    name: 'Piyumi',
    university: 'University of Oulu'
});
```

**Method 2:**

```js
let uniStudent = student => {
    let {name, university } = student;
    console.log(`${name} from ${university}`);
};

uniStudent({ 
    name: 'Piyumi',
    university: 'University of Oulu'
});
```

**Method 3:**

```js
let uniStudent = ({name, university }) => {
    console.log(`${name} from ${university}`);
};

uniStudent({ 
    name: 'Piyumi',
    university: 'University of Oulu'
});
```

All the methods generates the same output and the way of using can be selected as preferred. 

Output:

![obj des 2](./images/16.JPG)

## Destructuring arrays

This is just like dealing with the destructuring objects in previous section. 

```js
// let [theMountain] = ['Everest', 'Fish Tail', 'Annapurna']; //choose the first element
// let [, theMountain] = ['Everest', 'Fish Tail', 'Annapurna']; //choose the second element
let [, , theMountain] = ['Everest', 'Fish Tail', 'Annapurna']; //choose the third element

console.log(theMountain)
```

The **' , '** defines the number of elements in the array that we need to skip. The output for each selection of the elements is as below. 

![arr des 1](./images/17.JPG)
![arr des 2](./images/18.JPG)
![arr des 3](./images/19.JPG)

## Restructuring

Same as destructuring the object, we can restructure object from available variables. 

Below is an example of one way of doing it. The variables are restructured in the _var adventureClimbing_ object. 

```js
var name = 'Everest';
var height = 8848;
var output = function() {
    console.log(`Mt. ${this.name} is ${this.height} meters tall.`);
};

var adventureClimbing = { name, height, output };
adventureClimbing.output();
```

**Method 2:**

```js
var adventureClimbing = { 
    name: 'Everest', 
    height: 8848,
    output: function() {
    // or output() {
        console.log(`Mt. ${this.name} is ${this.height} meters tall.`);
    }
};
adventureClimbing.output();
```

The output of the restructuring eample is generated as below. 

![res](./images/20.JPG)

## Spread and rest operator

For this operator, resct JS uses `...`. This is used to combine two arrays of objects together. The first example shows that how it can be used in combining arrays. 

```js
var mountains = ['everest', 'Fish tail', 'Annapurna']
var mountainsInJapan = ['Fuji']

var allMountains = [...mountains, ...mountainsInJapan]
console.log(allMountains)
```

Output:

![spread 1](./images/21.JPG)

The example 2 shows how the spread operator work with the objects. 

```js
var day = {
    breakfast: 'toast with milk',
    lunch: 'rice with cicken curry'
}
var night = {
    dinner: 'noodle soup'
}

var picnic = {...day, ...night}
console.log(picnic)
```

Output:

![spread 2](./images/22.JPG)

This methos is very useful in API calls. 

The below example shows how the operator can be used as _rest_ operator.

```js
var rivers = ['Sunkoshi', 'Tamakoshhi', 'Saptakoshi'];
var [first, ...rest] = rivers
console.log(first)
console.log(rest)
```

Output:

![rest](./images/23.JPG)

## Class, constructor and super

In early version of JS, the classes were not directly defined as classes. The classes were defined as functions (in JS function acts as an object) first, and then a method to that function was defined using ```prototype``` keyword, to introduce what does it do. The new variable under that function behaves according the _function_ and the _method_ defined. 

```js
function Holiday (destination, days) {
    this.destination = destination;
    this.days = days;
}

Holiday.prototype.info = function() {
    console.log(this.destination + " | " + this.days + " days");
};

var nepal = new Holiday("Nepal", 30);
console.log(nepal.info())
```

Output:

![class 1](./images/24.JPG)

In next example it shows how _class_ cane be create a class with methods with properties. In below example, _constructor_ and _info_ are methods of the class and those have properties and arguments on its own. 

```js
class Holiday {
    constructor(destination, days) {
        this.destination = destination;
        this.days = days; 
    }
    
    info() {
        console.log(`${this.destination} will take ${this.days} days.`);
    }
}

const trip = new Holiday('Kathmandu, Nepal', 30); 
console.log(trip.info());
```

Output:

![class 2](./images/25.JPG)

Below example shows how the classes can be extended into children classes. Child class has the same properties of the parent class. 

```js
// super class

class Holiday {
    constructor(destination, days) {
    this.destination = destination;
    this.days = days; 
    }
    info() {
    console.log(`${this.destination} will take ${this.days} days.`);
    }
}


// sub class

class Expedition extends Holiday {
    constructor (destination, days, gear) {
        super(destination, days);
        this.gear = gear;
    }
    info() {
        super.info();
        console.log(`Bring your ${this.gear.join(" and your ")} .`)
    }
}

const tripWithGear = new Expedition("Everest", 30, ["Sunglasses", "Flags", "Camera"]);
tripWithGear.info();
```

Output:

![class 3](./images/26.JPG)

# React JS

## Installing React

1. Download and install Node. Download Node from [nodejs.org](https://www.nodejs.org/). 
2. Then go to the [react.org](https://www.react.org/). Start creating a react app using below commands. 

    ```cli
    npx create-react-app my-app
    ```

3. Then move into the `my-app` folder then type `npm start` to deploy the react web server. It will open a new window in powershell and also a new window in the web browser.

Web brower look:

![install react](./images/27.JPG)

## React files and folders introduction

1. **Project Structure**: 
   - The project is located in the root directory inside a folder named "my-app".
   - The main working directory is the `src` (source) folder.

2. **Index.js**:
   - `index.js` is importing `React`, `ReactDOM`, `index.css`, `App`, and `reportWebVitals` which is a function used to measure the performance of the application.
   - `ReactDOM.createRoot`: This method is used to create a root DOM node where the React application will be rendered. It is a part of the new React 18 concurrent features.
   - `document.getElementById('root')`: This targets the div element with the id root in the index.html file, where the React app will be mounted.

3. **Public Folder**:
   - `index.html` contains a `div` with the id `root`, where the React application will be rendered.

4. **App Component**:
   - `App.js` imports `logo.svg`, and `App.css`.   
        * **Functional Component Definition**:
        ```javascript
        function App() {
        ```
        - `App` is defined as a functional component. Functional components are simple JavaScript functions that return JSX, a mixture of JavaScript and HTML-like syntax. JSX allows embedding JavaScript within HTML using curly braces `{}`.

        * **JSX Return**:
        ```javascript
        return (
            <div className="App">
            <header className="App-header">
        ```
        - The component returns a JSX structure. JSX is a syntax extension for JavaScript that looks similar to HTML and is used to describe what the UI should look like.

        * **Top-Level Container**:
        ```javascript
            <div className="App">
        ```
        - The component returns a `div` with the class name `App`. This `div` acts as the top-level container for the component.

        * **Header Section**:
        ```javascript
            <header className="App-header">
        ```
        - Inside the top-level `div`, there is a `header` element with the class name `App-header`. This section contains the main content of the component.

        * **Logo Image**:
        ```javascript
            <img src={logo} className="App-logo" alt="logo" />
        ```
        - An `img` element is used to display the imported logo image. It uses `src={logo}` to set the source of the image, `className="App-logo"` for styling, and `alt="logo"` for accessibility.

        * **Edit Instructions**:
        ```javascript
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
        ```
        - A `p` (paragraph) element provides instructions to edit the `src/App.js` file and save to reload the application. The `<code>` element is used to style the file path as code.

        * **Learn React Link**:
        ```javascript
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        ```
        - An anchor (`a`) element provides a link to the React documentation. The link opens in a new tab (`target="_blank"`) and uses `rel="noopener noreferrer"` for security reasons. The `className="App-link"` is used for styling.

        * **Closing Tags**:
        ```javascript
            </header>
        </div>
        ```
        - The closing tags for the `header` and `div` elements wrap up the structure of the component.

5. **Live Reloading**:
   - Any changes made to the React components automatically reload the application, reflecting changes immediately.

## Storing data in component state via ajax call

Certainly! Here is the detailed explanation with thorough details filled in according to the given code:

### 1. **Cleanup and Preparation**
   - **Removed Unnecessary Imports, Components, and Hardcoded Data**: In transitioning from an example or initial setup, any unused imports, such as `React.Component`, `componentWillMount`, `constructor`, and hardcoded data, were removed. This streamlined the code and prepared it for dynamic data fetching.
   - **Decided to Make an API Call**: Instead of using dummy data which is common in initial setups or tutorials, the decision was made to fetch real data from an API. This approach mirrors a real-world scenario where data is often fetched from external sources.

### 2. **Installing Axios to Make the API Calls**
   - **Installed Axios**: Axios, a popular promise-based HTTP client, was chosen for making the API calls due to its ease of use and powerful features. It simplifies the process of making requests and handling responses in JavaScript.
   - **Installation Command**: To install Axios, the command `npm install axios` or `yarn add axios` was run in the terminal. This added Axios to the project dependencies, making it available for import and use in the project.

### 3. **Setting Up State**
   - **Introduced State in React**: The concept of state in React was introduced to manage data fetched from the API. State is a built-in object that allows components to create and manage their own data.
   - **Using `useState` Hook**: Instead of using a constructor as in class components, the `useState` hook was used to initialize the state. The `useState` hook takes an initial state value (an empty array in this case) and returns an array containing the state variable (`users`) and a function (`setUsers`) to update the state.

### 4. **Making the API Call**
   - **`useEffect` Hook**: The `useEffect` hook was utilized to handle side effects, such as fetching data. Unlike class components, functional components do not have lifecycle methods like `componentWillMount` or `componentDidMount`. Instead, `useEffect` provides a way to perform side effects in function components.
   - **API Call with Axios**: Inside `useEffect`, an Axios GET request was made to `https://api.randomuser.me/?nat=US&results=5` to fetch 5 random users from the US. The empty dependency array `[]` ensures that the effect runs only once, mimicking `componentDidMount` behavior.

### 5. **Handling the API Response**
   - **Using `.then` to Handle the Response**: The `.then` method was used to handle the promise returned by Axios. Once the data is fetched successfully, the response is logged to the console for debugging purposes.
   - **Updating the State**: The `setUsers` function (from `useState`) was used to update the `users` state with the fetched data. Specifically, `response.data.results` was extracted and set to the `users` state. Using `setState` or its equivalent ensures that React is aware of the state change and triggers a re-render of the component.

### 6. **Rendering Data**
   - **Initial Render Message**: The `return` statement within the functional component currently returns a simple `<div>` element with the text "We are back!". This can be expanded later to dynamically render the fetched user data.
   - **Future Data Rendering**: The next step would involve using the `users` state to dynamically render user data within the JSX. This can be done using array methods like `map` to iterate over the `users` array and generate corresponding UI elements for each user.
   - **React Developer Tools**: The state can be inspected using React Developer Tools, a browser extension that allows developers to inspect React component hierarchies and state. This helps confirm that the data has been fetched correctly and is being managed properly within the component.

Here is the code again for reference:
```js
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  // state
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios('https://api.randomuser.me/?nat=US&results=5')
      .then(response => {
        console.log(response);
        setUsers(response.data.results);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return <div className="App">We are back!</div>;
}

export default App;
```

Output:

![ajax call](./images/28.JPG)

## Rendering state data using map

Here, we try to render users from users array in API using state. The code example is as follows.

```javascript
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  // State to hold user data
  const [users, setUsers] = useState([]);

  // Fetching data from API
  useEffect(() => {
    axios('https://api.randomuser.me/?nat=US&results=5')
      .then(response => {
        setUsers(response.data.results);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="App">
      {users.map(user => (
        <div key={user.login.uuid}>
          <p>{user.cell}</p>
          <p>{`${user.name.first} ${user.name.last}`}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
```

1. **Mapping Over State**:
   - Inside the `return` statement of the `App` component, we use JavaScript embedded in JSX by wrapping it in curly braces `{}`.
   - We call `users.map(user => ...)`, which iterates over the `users` array in the state and returns a new array of JSX elements for each user.

2. **Rendering User Details**:
   - For each user, we return a `<div>` element containing the user's cell phone, full name, and email.
   - We use `user.login.uuid` as a unique key for each user to help React identify which items have changed, are added, or are removed.

To improve the user experience while data is being fetched, we can introduce a loading state.

```javascript
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  // State to hold user data and loading status
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetching data from API
  useEffect(() => {
    axios('https://api.randomuser.me/?nat=US&results=5')
      .then(response => {
        setUsers(response.data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      {loading ? (
        <p>Loading...</p>
      ) : (
        users.map(user => (
          <div key={user.login.uuid}>
            <p>{user.cell}</p>
            <p>{`${user.name.first} ${user.name.last}`}</p>
            <p>{user.email}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
```

1. **State for Loading**:
   - Introduced a new state variable `loading` initialized to `true`.
   - This state indicates whether the data is still being loaded.

2. **Updating Loading State**:
   - After fetching data successfully, we set `loading` to `false`.
   - If there's an error fetching data, we also set `loading` to `false` to stop the loading indicator.

3. **Conditional Rendering**:
   - If `loading` is `true`, we display a loading message.
   - Once loading is complete (`loading` is `false`), we map over the `users` array and render the user details.

To improve code maintainability, we can extract the API call logic into a separate function.

```javascript
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch users
  const fetchUsers = () => {
    axios('https://api.randomuser.me/?nat=US&results=5')
      .then(response => {
        setUsers(response.data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <p>Loading...</p>
      ) : (
        users.map(user => (
          <div key={user.login.uuid}>
            <p>{user.cell}</p>
            <p>{`${user.name.first} ${user.name.last}`}</p>
            <p>{user.email}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
```

1. **Extracted `fetchUsers` Function**:
   - Created a `fetchUsers` function to handle the API call and state updates.
   - Moved the API call logic from `useEffect` to `fetchUsers`.

2. **Calling `fetchUsers` in `useEffect`**:
   - In `useEffect`, we simply call `fetchUsers` to initiate the API call when the component mounts.

Output:

![ajax state](./images/29.JPG)

## Conditional rendering

The conditional rendering has been showcased in above code. A simple go through of the code is shown below. 

1. **State Management**:
   - Introduced a `loading` state along with the `users` state.
   - By default, set `loading` to `true` to indicate that data fetching is in progress.

2. **Setting Loading State**:
   - Before making the API call, set `loading` to `true` to indicate loading.
   - Once the API call completes, set `loading` to `false`.

3. **Conditional Rendering**:
   - Used a ternary operator to conditionally render the loading message or the list of users based on the `loading` state.


## Imports exports props

1. **Creating a Separate Component**:
   - Learn how to create a separate, reusable component in React.
   - Understand the difference between class components and functional components, and when to use each.
   - Focus on creating a stateless functional component for simplicity.

2. **Implementing the Loading Component**:
   - Create a simple `Loading` component that displays a loading message.
   - Use the `export default` statement for single-component exports.
   - Import and use the `Loading` component in the main `App` component.

3. **Conditional Rendering with the Loading Component**:
   - Apply conditional rendering in the `App` component to show the `Loading` component when data is being fetched.
   - Render the user list when the data fetching is complete.

4. **Exporting and Importing Components**:
   - Differentiate between default exports and named exports.
   - Understand how to import components using curly braces for named exports.

5. **Passing Props to Components**:
   - Learn how to pass data from a parent component to a child component using props.
   - Destructure props in the functional component for simplicity.
   - Pass dynamic messages or state data to the `Loading` component.

6. **Reusability of Components**:
   - Understand the importance of reusable components.
   - Create a flexible `Loading` component that can be used with different messages in different parts of the application.


A detailed guide in creating the import prop is shown below. 

1. Create a new file named `Loading.js` for the `Loading` component.

```javascript
// Loading.js
import React from 'react';

// Stateless functional component
const Loading = ({ message }) => {
  return <h2>{message}</h2>;
};

export default Loading;
```

2. Implementing the Loading Component

Import the `Loading` component in the `App` component.

```javascript
// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Loading from './Loading';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = () => {
    setLoading(true);
    axios('https://api.randomuser.me/?nat=US&results=5')
      .then(response => {
        setUsers(response.data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading message="Loading..." />
      ) : (
        users.map(user => (
          <div key={user.login.uuid}>
            <p>{user.cell}</p>
            <p>{`${user.name.first} ${user.name.last}`}</p>
            <p>{user.email}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
```

3. Conditional Rendering with the Loading Component

Using the ternary operator, conditionally render the `Loading` component or the list of users based on the `loading` state.

4. Exporting and Importing Components

Example of exporting multiple components:

```javascript
// MultipleComponents.js
import React from 'react';

export const ComponentOne = () => <div>Component One</div>;
export const ComponentTwo = () => <div>Component Two</div>;
```

Importing named exports:

```javascript
// App.js
import { ComponentOne, ComponentTwo } from './MultipleComponents';
```

5. Passing Props to Components

Pass dynamic messages to the `Loading` component and destructure props directly in the function parameters.

```javascript
// Loading.js
import React from 'react';

// Stateless functional component with destructured props
const Loading = ({ message }) => {
  return <h2>{message}</h2>;
};

export default Loading;
```

```javascript
// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Loading from './Loading';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = () => {
    setLoading(true);
    axios('https://api.randomuser.me/?nat=US&results=5')
      .then(response => {
        setUsers(response.data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading message="Fetching user data, please wait..." />
      ) : (
        users.map(user => (
          <div key={user.login.uuid}>
            <p>{user.cell}</p>
            <p>{`${user.name.first} ${user.name.last}`}</p>
            <p>{user.email}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
```

6. Reusability of Components

By passing different messages or data to the `Loading` component, it can be reused in different parts of the application.

```javascript
// AnotherComponent.js
import React from 'react';
import Loading from './Loading';

const AnotherComponent = () => {
  return (
    <div>
      <Loading message="Loading cart items..." />
    </div>
  );
};

export default AnotherComponent;
```

Output:

![imports](./images/30.JPG)


## Handling click events

The code can be go through step-by-step. 

1. **Adding a Form Element**:
  - Create a form with a submit button.
  - The form will have an input of type "submit" with the value "Load Users".
  - When the submit button is clicked, it will trigger a function to load more users.

2. **Handling Submit Event**:
  - Create a `handleSubmit` function to manage the form submission.
  - Prevent the default form submission behavior using `event.preventDefault()`.
  - Call the `fetchUsers` function within `handleSubmit` to load more users.
  - Log a message to the console for debugging.

3. **Binding Methods in Class Components**:
  - Bind the `handleSubmit` method in the constructor to ensure the correct `this` context.

4. **Fetching New Users**:
  - When the form is submitted, the `fetchUsers` function is called to load more users.
  - Merge the newly fetched users with the existing users in the state using the spread operator.
  - Update the state with the combined list of users.

5. **Preventing Page Reload**:
  - Ensure that the page does not reload when the form is submitted by correctly binding the event handler and using `event.preventDefault()`.

6. **Appending New Users**:
  - Append new users to the existing list in the state each time the "Load Users" button is clicked.
  - Use the spread operator to concatenate the existing users with the newly fetched users.

In below code, the form has been added with the handling component. 

```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Loading from './Loading';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = () => {
    setLoading(true);
    axios.get('https://api.randomuser.me/?nat=US&results=5')
      .then(response => {
        setUsers(prevUsers => [...prevUsers, ...response.data.results]);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchUsers();
    console.log('More users loaded.');
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="submit" value="Load Users" />
      </form>
      {loading ? (
        <Loading message="Loading users..." />
      ) : (
        users.map(user => (
          <div key={user.login.uuid}>
            <p>{user.cell}</p>
            <p>{`${user.name.first} ${user.name.last}`}</p>
            <p>{user.email}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default App;
```

Each time the _load user_ button is pressed, 5 more users added to the fetched list.

## Destructuring, inline styling and keys

Here, the code is changed so that it can be cleaner to read and use. Object destructuring can still be relevant in the functional component code to simplify the handling of state and props. However, in the code provided, since the state is directly accessed through hooks, there isn't a need to destructure the state object as we would in a class component.

1. **Destructuring State in Functional Components**:
   - In functional components, state is often managed with hooks like `useState`. The destructuring of the state happens when you call `useState`, so there's no need to further destructure it within the component.

2. **Destructuring Props**:
   - If your functional component receives props, destructuring them at the beginning of your component can simplify the code. 

Here’s an example.

```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Loading from './Loading';

const App = (props) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); //Destructuring

  const fetchUsers = () => {
    setLoading(true);
    axios.get('https://api.randomuser.me/?nat=US&results=5')
      .then(response => {
        setUsers(prevUsers => [...prevUsers, ...response.data.results]);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchUsers();
    console.log('More users loaded.');
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="submit" value="Load Users" />
      </form>
      {loading ? (
        <Loading message="Loading users..." />
      ) : (
        users.map(user => (
          <div key={user.login.uuid}> 
            <p>{user.cell}</p>
            <p>{`${user.name.first} ${user.name.last}`}</p>
            <p>{user.email}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default App;
```

### Using Inline Styling:

Here’s how inline styling and the unique key is added to tha `App` component. In React, when rendering lists, each element must have a unique key prop. This helps React identify which items have changed, are added, or removed. This ensures each element in a list has a unique `key` prop to avoid warnings and improve performance.

```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Loading from './Loading';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = () => {
    setLoading(true);
    axios.get('https://api.randomuser.me/?nat=US&results=5')
      .then(response => {
        setUsers(prevUsers => [...prevUsers, ...response.data.results]);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchUsers();
    console.log('More users loaded.');
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="submit" value="Load Users" />
      </form>
      {loading ? (
        <Loading message="Loading users..." />
      ) : (
        users.map(user => (
            //Using unique keys
          <div key={user.login.uuid} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
            <p>{user.cell}</p>
            <p>{`${user.name.first} ${user.name.last}`}</p>
            <p>{user.email}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default App;
```

Output:

![styles](./images/31.JPG)