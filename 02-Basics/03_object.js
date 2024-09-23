//singleton
// Object.create

//Object literals

const mySymbol1 = Symbol("myKey1")  // take a symbol and add into the object and then print it
const mySymbol = Symbol("key2")

const JsUser = {
    name: "Shilpa",
    mySymbol1:"key1", // this is not the right method to add symbol, This is just another key of object
    [mySymbol] : "key1",  // this is a symbol
    "full Name" : "Shilpa chaurasiya",
    age:20,
    location:"Bengaluru",
    email:"shilpa@gmail.com",
    isLoggedIn : true
}

//Accessing the items of the object

// console.log(JsUser.age);
// console.log(JsUser["age"]); //preffered method to access the elements
// console.log(JsUser["full Name"]) 

// // Printing the symbol
// console.log(typeof mySymbol1)
// console.log( JsUser[mySymbol])

// console.log(typeof JsUser.mySymbol1)


// To avoid the changes into the object we use the freez() to lock the object do that no changes will be reflact into the object

JsUser.email = "shilpa@google.com"
// Object.freeze(JsUser)
JsUser.email = "shilpa@chatgpt.com"
console.log(JsUser)
/*
{
  name: 'Shilpa',
  mySymbol1: 'key1',
  'full Name': 'Shilpa chaurasiya',
  age: 20,
  location: 'Bengaluru',
  email: 'shilpa@google.com',
  isLoggedIn: true,
  [Symbol(key2)]: 'key1'
}
*/


//Adding functions into the object
JsUser.greeting = function(){
    console.log("Hello JS user!");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user ${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())