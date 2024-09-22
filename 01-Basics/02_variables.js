const accountId = 136273
let accountEmail = "shilpa@gmail.com"
var accountPassword = "127654"
accountCity = "Bengluru"
let accountState;

//accountId = 2 //Not allowed (const type)

console.log(accountEmail)
console.table([accountId, accountEmail, accountPassword, accountCity,accountState])
// Here the table will print all the variables in Table formate , we do not have to use console.log() for every variables.

/*
Prefer not to use var 
because of the issue in block scope and functional scope
 */
