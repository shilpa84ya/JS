const myNum = [1,2,3]

// const result = myNum.reduce(function(accumulator, currentValue){
//     console.log(`accumulator: ${accumulator} currentValue: ${currentValue}`)
//     return accumulator+currentValue
// },0)  // This 0 is passed so that in starting the accumulator is assigned with this value

// console.log(result) 
/*
accumulator: 0 currentValue: 1
accumulator: 1 currentValue: 2
accumulator: 3 currentValue: 3
6
*/


//using arrow function
const result = myNum.reduce( (acc, curval) => {
    console.log(`acc: ${acc} currval: ${curval}`)
    return acc + curval
}, 0 )
// console.log(result) 


const shoppingCart = [
    {
        courseName:"js course",
        price: 999
    },
    {
        courseName:"py course",
        price: 12000
    },
    
    {
        courseName:"Spring Boot ",
        price: 10000
    },
    {
        courseName:"data science course",
        price: 12000
    },
    
    {
        courseName:"mobile development course",
        price: 2999
    },
]


// add all the prices of the courses

const totalCost = shoppingCart.reduce((sum, obj) => sum + obj.price, 0)

console.log("Total price of all the courses is ",totalCost)