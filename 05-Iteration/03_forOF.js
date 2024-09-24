// FOR-Of loop
const arr = [1,2,3,4,5,6,78,9]
for (const val of arr) {
    // console.log(`Value of array: ${val}`)
}

const greeting = "Hello World"
for(const greet of greeting){
    if(greet === " "){
        console.log("Space detected")
        continue
    }
      
    //  console.log(`Each char is ${greet}`)
}


// MAP

const map = new Map()

// To set value in map

map.set("IN","India")
map.set("USA", "United State Of America")
map.set("FR","France")
map.set("IN", "India")

// console.log(map)

// using forOF loop on map by de-structuring it

for(const key of map){  // Without de-structuring it
    // console.log(key)
}

for(const [key,value] of map){
    // console.log(`${key} : ${value} `)
}

const myObject = {
    "game1" : "mario",
    "game2" : "contra"
}

// Object can not be iterate through forOf loop
for(const [key, value] of myObject){
    console.log(`${key} : ${value} `)  //  myObject is not iterable
}