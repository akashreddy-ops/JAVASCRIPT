const accountId = 532312
let accountEmail = "akash@google.com"
var accountPassword = "121212"
accountCity = "Ichapuram"
let accountState;

// accountId = 2   Not allowed 


/*
prefer not use var
because of issue in block scope and Functional scope 

*/


accountEmail = "rahul@google.com"
accountPassword = "123456"
acoountCity = "Hyderabad"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

