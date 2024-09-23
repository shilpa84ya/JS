const arr = [1,2,3,4,5,6]
console.log(arr)

const a = new Array(11,22,33,44,55,66)
console.log(a)

const stringArr = ["Shilpa", "Shalini", "Tanu"]
console.log(stringArr);

// Insert element in the last of the list
stringArr.push("Siya")
console.log(stringArr)

// // to remove last element of the list
stringArr.pop()
console.log(stringArr);

//To add the element in start(Not Recommended)
stringArr.unshift(19)
console.log(stringArr)

// to remove first element
stringArr.shift()
console.log(stringArr);


const newArra = arr.join()
console.log(newArra)
console.log(arr)



// Slice, splice
console.log("Original: ",arr) //Original:  [ 1, 2, 3, 4, 5, 6 ]


const a1 = arr.slice(1,3)
console.log("Slice: ",a1) // Slice:  [ 2, 3 ]
console.log("After Slice: ",arr) // After Slice:  [ 1, 2, 3, 4, 5, 6 ]

const a2 = arr.splice(1,3)
console.log("Splice: ",a2) // Splice:  [ 2, 3, 4 ]
console.log("After Splice: ",arr) // After Splice:  [ 1, 5, 6 ]

/*
SLICE : 1. it does not include the last index
        2. It does not effect the original array.

SPLICE : 1. It include the last index .
         2. It make a seprate copy of the element and the original array include the remainig elements only.        */