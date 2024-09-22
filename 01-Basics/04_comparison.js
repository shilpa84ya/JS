// console.log(2 > 1)
// console.log(2 < 1)
// console.log(2 >= 1)
// console.log(2 <= 1)

console.log("2" > 1)
console.log("02" >1 )

console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) // true

/*
The reason is that ans equality check == and comparison >, <, >=, <= work differently.
comparison convert null to a number treating it as 0.
that's why  (3) null >= 0 is true and (1) null > 0 is false.

we avoid using this type of conversion where the data type is different.*/

// === : it strictly checks the value and also chacke the data type of both value.

console.log("2" === 2)
console.log("2" == 2)
