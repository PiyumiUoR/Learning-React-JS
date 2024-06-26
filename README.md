# Learning-React-JS

This repository contains the exercises done by me during the Udemy course "React JS Frontend Web Development for Beginners" by Ryan Dhungel. 

Link to the course is [here.](https://www.udemy.com/share/101rkI3@zMJhoBQX62DEpDKqhDh4Nq8DCl1wR1sLTXoIBZfNaJEtlFf0DKuzaPrA6jxET6DPOA==/)

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
