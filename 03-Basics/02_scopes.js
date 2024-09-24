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
console.log("c: ",c) // 300
 