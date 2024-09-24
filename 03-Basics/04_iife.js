// Immediately Invoked Function Expressions IIFE 

// NOTE the function which executes immediatly. it is used to remove the global scope polution

(function chai(){
    // Named IIFE
    console.log("DB Connected")
})(); // we have to explicitely end the execution of the iife function using semicolon,
// as it does not know where to end the the execution.

// syntax ()(), the first parenthesis is used to wrap the function and second is used to execute(call) it.

( (name)=>{

    //UnNamed IIFE
    console.log("username",name)
})("shilpa");