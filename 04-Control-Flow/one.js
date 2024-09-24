const isUserLoggedIn = true

if (isUserLoggedIn) {
    console.log("Executed")
}



 const balance = 1000
 //Not a good practice to write code like this:
// if(balance > 100) console.log("test1"), console.log("test2");


// if(balance < 500)
//     console.log("less than 500")
// else if(balance < 750)
//     console.log("less than 750")
// else if(balance<900)
//     console.log("lesst than 900")
// else
//     console.log("Less than 1200")


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromGmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to shopping")
}

if(loggedInFromGmail || loggedInFromGoogle){
    console.log("User logged In")
}