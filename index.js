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

// function welcome(user, message){
//     alert(`Hello ${user}, ${message}`)
// }

// // welcome('Piyumi', 'Welcome!')
// welcome();

function welcome(user="mystery user", message="Good bye!"){
    alert(`Hello ${user}, ${message}`)
}
// welcome('Piyumi', 'Welcome!')
welcome();