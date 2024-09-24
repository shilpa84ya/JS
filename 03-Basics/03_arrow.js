const user ={
    username :"Shilpa",
    prize : 999,
    welcomeMessege : function(username){
        console.log(`${this.username} welcome to website`)
        console.log(this)
    }
}
// user.welcomeMessege()
// user.username = "Shalini"
// user.welcomeMessege()


// const chai = function(){
//     let username = "Shilpa"
//     console.log(this.username)
// }


// This arrow function
const chai = () => {
        let username = "Shilpa"
        console.log(this.username)
    }

chai()


// This keyword is used to refere to the current object
/*
simple Syntax of arrow function
 1. () => {
    }

    or

 2. const variable = () => {
    }    
 */


    // if using curly braces, then it is mandatory to write return keyword (Explicite return)
const addOne1 = (num1, num2) => {
    return num1 + num2
}    

// if one line statemnet do not use curly braces and using parenthesis if not using curly braces then do not use return keyword (implicite return)
const addOne2 = (num1, num2) => (num1 + num2)
   
console.log(addOne2(10,20))

//console.log(addOne(2,3))

