// let a = 10
// const b = 20
// var c = 30

if(true){
    let a = 100
    const b = 200
    var c = 300  //Global scope (not preffered to use)
}
// console.log("a: ",a) // we'll get an error as a is defined inside if() block
//console.log("b :",b) // we'll get an error as b is defined inside if() block
// console.log("c: ",c) // 300




addOne(5)
function addOne(num){
    return num+1

}
addTwo(5) // Cannot access 'addTwo' before initialization (Called Hoisting)
const addTwo = function(num){
    return num +2
}
