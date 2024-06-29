# Learning-React-JS

This repository contains the exercises done by me during the Udemy course "React JS Frontend Web Development for Beginners" by Ryan Dhungel. 

Link to the course is [here.](https://www.udemy.com/share/101rkI3@zMJhoBQX62DEpDKqhDh4Nq8DCl1wR1sLTXoIBZfNaJEtlFf0DKuzaPrA6jxET6DPOA==/)

## Modern Javascript

### Variable types

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

### Template strings

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

### Default parameters

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

### Arrow function

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

### Arrow function and _this_ function

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

### Destructuring objects

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

### Destructuring arrays

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

### Restructuring

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

### Spread and rest operator

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

### Class, constructor and super

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

## React JS



