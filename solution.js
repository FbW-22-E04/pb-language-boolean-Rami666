
//1
console.log(3 == '3')    // loose comparison
console.log(3 === '3')   // strict comparison

console.log(2)  // ==
console.log(7)  // ===
console.log(9)  // =

//2
let myVar = true;
console.log( !myVar ? 'good morning' : 'good evening' );


//3 
// && will return the first false value. in case all the values are true, it will return the last one. (first false or last true)
// || will return the first true value. in case all the values are false, it will return the last one. (first true or last false)
let firstName = '' || 'John' || 0; // first truthy value is 'John'
let emptyStr= '' && false && 'Hello World'  // first falsy value is ''
let zero = '' || false || 0        // all values are falsy and the last one is 0
let seven = 75 && 'nine' && 7               // all values are truthy and the last one is 7

console.log(firstName, zero, emptyStr, seven);