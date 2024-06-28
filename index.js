// //exercise 1

// if (true){
//     let name = 'Piyumi';
//     // alert(name);
// }

// alert(name);

// //exercise 2

// let fname = 'Piyumi';
// let lname = 'W';
// let age = prompt("Guess Piyumi's age..");

// // //old way
// // let result = fname + ' ' + lname + ' '+ 'is ' + age + ' ' + 'years old.';
// // alert(result);

// //template strings
// let result = `${fname} ${lname} is ${age} years old.`;
// alert(result);

// //ex 5

// function welcome(user, message){
//     alert(`Hello ${user}, ${message}`)
// }

// // welcome('Piyumi', 'Welcome!')
// welcome();

// function welcome(user="mystery user", message="Good bye!"){
//     alert(`Hello ${user}, ${message}`)
// }
// // welcome('Piyumi', 'Welcome!')
// welcome();

// // ex 6

// function greeting(message){
//     return alert(`${message} everyone`);
// }

// // let greeting = message => alert(`${message} everyone`);

// greeting("Good morning");

// let createBlog = (title, body) => {
//     if (!title) {
//         throw new Error('A title is required');
//     }
//     if (!body) {
//         throw new Error('Body cant be empty');
//     }
    
//     return alert(`${title} - ${body}`);
// };

// createBlog('new title', 'new body');

// let greeting = () => alert(`Hello everyone`);

// greeting();

// function sayHi(){
//     //
// }

// console.log(this);

// // exercise 7

// let nepal = {
//     // add property
//     mountains: ['Everest', 'Fish Tail', 'Annapurna'],

//     // add method
//     printWithDash: function() {
//         // console.log('Inside printWithDash', this)
//         setTimeout(() => console.log(this.mountains.join(' - ')), 2000)
//             // console.log('Inside setTimeout', this)       
//     }
// }

// nepal.printWithDash();

// exercise 8

// let thingsToDo = {
//     morning: "Exercise",
//     afternoon: "Work",
//     evening: "Code",
//     night: ["sleep", "dream"]
// }

// let {morning, night} = thingsToDo; //object destructuring

// console.log(morning, ' - ', night)

//////Method 1

// let uniStudent = student => {
//     // let {name, university } = student;
//     console.log(`${student.name} from ${student.university}`);
// };

// uniStudent({ 
//     name: 'Piyumi',
//     university: 'University of Oulu'
// });

//////Method 2

// let uniStudent = student => {
//     let {name, university } = student;
//     console.log(`${name} from ${university}`);
// };

// uniStudent({ 
//     name: 'Piyumi',
//     university: 'University of Oulu'
// });

//////Method 3

// let uniStudent = ({name, university }) => {
//     console.log(`${name} from ${university}`);
// };

// uniStudent({ 
//     name: 'Piyumi',
//     university: 'University of Oulu'
// });

// let [theMountain] = ['Everest', 'Fish Tail', 'Annapurna']; //choose the first element
// let [, theMountain] = ['Everest', 'Fish Tail', 'Annapurna']; //choose the second element
let [, , theMountain] = ['Everest', 'Fish Tail', 'Annapurna']; //choose the third element

console.log(theMountain)


