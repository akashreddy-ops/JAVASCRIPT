let score = 33

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumnber);
console.log(valueInNumber);


// "33"  => 33
// "33abc => NaN
// true => 1; false => 0;


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true ; 0 => false
// "" => false
// "Akash" => true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);










//   *************************************** Operations ************************************//

let value = 3
let negValue = -value
console.log(negValue);


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);




let str1 = "Hello"
let str2 = "Akash"

let str3 = str1 + str2
console.log(str3);


console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");


console.log(+true);
console.log(+"");


let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;            // reverse also same value because of the we are using precidence ++gameCounter; the value also coming same 101
console.log(gameCounter);   // there is one website also prefix and postfix MDN 

// website link to study 
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment