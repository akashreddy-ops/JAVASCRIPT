//   // primitive

// //  7 types : String, Number, Boolean, Null, Undefined, Symbol, Bigint

// const score = 100
// const scoreValue = 100.3
// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = symbol('123')
// const anotherId = symbol('123')

// console.log(id === anotherId);


// const bigNumber = 23121421426142751455152416257615275n



// // Reference (Non primitive)

// // Array, Objects, Functions

// const heros = ["Ramcharan", "Alluarjun", "Prabhs"];
// let myObj =  {
//     name: "Akash",
//     age: 19,
// }

// const myFunction = function(){
//     console.log("Hello World");
// }




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// stack (primitive)  and Heap (Non primitive)

let myyoutubename = "Akahreddydotcom"

let anotherName = "myyoutubename"
anotherName = "TeluguchannelCoder"

console.log(myyoutubename);
console.log(anotherName);


let userOne = {
    email: "akashreddyyoutube.com",
    upi: "user@ybl"
}


let userTwo = userOne 
userTwo.email = "akashreddyyoutube.com"

console.log(userOne.email);
console.log(userTwo.email);