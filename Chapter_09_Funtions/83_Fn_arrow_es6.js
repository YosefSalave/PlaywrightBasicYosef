//Arrow function
 const greet = function(name) {
    return `Hello, ${name}!`;
 }
 
 //If you want to make a normal function to arrow function
 //Remove the keyword function, remove the keyword return, remove the curly braces and use =>
 //

 const greet1 = (name1) => `Hello, ${name1}!`;

console.log(greet("yosef"));
console.log(greet1("Rama"));

//Arrow function is generaly works whenever you have a single line
const doubleIt = n => n * 2;
console.log(doubleIt(5))

//No param - parens required 
const getEnv = () => "Staging";
console.log(getEnv());

//suppose we have a multi-line, can we use arrow function everwhere?
//Multiline - needs curly braces + Return
const getResult = (score) => {
    if (score >=70) return "pass"
    return "fail"
}
console.log(getResult(60))