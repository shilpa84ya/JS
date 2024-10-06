const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor)
/*
{
  value: 3.141592653589793,
  writable: false,  // this is hardcoded as false so the value can not be changed
  enumerable: false,
  configurable: false
}
*/

// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)

const obj = {
    name : "ginger",
    price: 250,
    isAvailable : true,

    isCostly : function(){
        console.log("Costly")
    }
}

// console.log(obj)
const des = Object.getOwnPropertyDescriptor(obj, "price")
// console.log(des)

// Object.defineProperty(obj, "price",{
//     writable: false,
//     enumerable:false
// } )
// const afterDes = Object.getOwnPropertyDescriptor(obj, "price")
// console.log(Object.getOwnPropertyDescriptor(obj, "price"))


// itarating the object
for (const [key, value] of Object.entries(obj)) {
    if(typeof value !== "function"){
        console.log(`${key} : ${value}`)
    }
}