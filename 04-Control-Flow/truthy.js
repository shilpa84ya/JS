const userEmail = true;
if (userEmail) {
    console.log("user logged in")
}
else{
    console.log("User don't have email")
}

// Falsy value
// false, 0, -0, "", null, undefined, bigInt 0n, NaN

// Truthy Value
// "0", " ", "false", [], {}, function(){}, 


// to check if object is empty or not

const emptyObject = {}

if(Object.keys(emptyObject).length === 0){
    console.log("Object is Empty!")
}



// Nullishe Coalecing Operator ?? For null and undefined
// mostly used when we have two value and not sure if any of them is null or undefined, it assign the not null value to the variable

const val1 = 2 ?? 10
const val2 = null ?? 1
const val3 = null ?? null
console.log(`val1: ${val1}, val2: ${val2}, val3: ${val3}`) //. val1: 2, val2: 1, val3: null


// Ternary Operator

// Condition ? true: false