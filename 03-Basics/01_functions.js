function addTwonumber(number1, number2){
    console.log(`Addition : ${number1 + number2}`)
}
//function calling
addTwonumber(2,3)

function MulTwonumber(number1, number2){
    return number1 * number2
}

const result = MulTwonumber(2,3)
// console.log(`Multiplication : ${result}`)


function userLoginMessege(username){
    // if(username === undefined)
    if(!username)
    {
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
// console.log(userLoginMessege(""))


// REST OPERATOR (Spread Operator, when used in function known as rest operator)

// it is used when we do not know how many parameters will be passed in function

function calculateCartPrize(...num){
    return num
}
// console.log(calculateCartPrize(100))
// console.log(calculateCartPrize(100,899,10000, 600))
// console.log(calculateCartPrize(100,300))

// when we know that al leat two parameters will be passed
function calculate(val1, val2, ...num){ // in this the first two value will be assigned to the val1, and val2 and the rest to num 
     return num
}

// passing object to the function

const user = {
    username: "Shilpa",
    userId: 101
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and userId is ${anyObject.userId}`)
}

handleObject(user)
//We can directly pass the object 
handleObject({
    username:"Sam",
    userId:111
})