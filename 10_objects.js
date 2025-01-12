//  singleton

// Object literals 

const JsUser = {
    name : "akash youtube channel",
    age : 24,
    location : "Andhra pradesh",
    mail : "danapanaakashreddy555@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
    
}

console.log(JsUser.email);
console.log(JsUser["email"]);




// // const tinderUser = new Object()
// // console.log(tinderUser);

// const tinderUser = {}
// tinderUser.id = "123abc"
// tinderUser.name = "Akash"
// tinderUser.isLoggedIn = false

// console.log(tinderUser);


// const regularUser =  {
//     emial: "akashreddy@google.com",
//     fullname: {
//         userfullname:{
//             firstname : "akash reddy",
//             lastname: "danapana"
//         }
//     }
// }


// console.log(regularUser.userfullname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {obj1, obj2}

console.log(obj3);