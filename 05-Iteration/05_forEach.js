// ForEach loop is mostly used loop

// Syntax
// object.forEach( function(val){do what u want to do with the received value val})

const coding = ["java", "python","c","javaScript"]

// Call back functions do not have any name
coding.forEach( function(val){
    // console.log(val)
})

// using arrow operator
coding.forEach( (item) => {
    // console.log(item)
})

// we can also pass a function
// we have a function 

function printme(item){
    // console.log(item)
}

// coding.forEach(printme) // just pass the reference of function


coding.forEach( (item, index, arr) => {
    // console.log(item,index,arr)
})

// OUTPUT
/*
java 0 [ 'java', 'python', 'c', 'javaScript' ]
python 1 [ 'java', 'python', 'c', 'javaScript' ]
c 2 [ 'java', 'python', 'c', 'javaScript' ]
javaScript 3 [ 'java', 'python', 'c', 'javaScript' ]
*/


// iterating array of objects

const myArray = [
    {
        languageName: "javaScript",
        languageFile: "js"
    },
    {
        languageName:"Java",
        languageFile:"java"
    },
    {
        languageName:"python",
        languageFile:"py"
    }
]

myArray.forEach( (obj) =>{
    console.log(obj.languageName)
})