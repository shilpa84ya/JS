// Iterating object using FOR-IN loop

// Object declaration
const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb:"Ruby",
    swift: "swift by Apple"
}

for (const key in myObject) {
//    console.log(key) // To access all the keys
//    console.log(myObject[key]) // To access all tha values
}

// for_IN loop on arrays give the index value 
const myarray = ["java","javascript","cpp","c"]
for(const key in myarray){
    // console.log(key)
}

// Map is Not iterable in for-IN loop

const map = new Map()
map.set("IN","India")
map.set("USA", "United State Of America")
map.set("FR","France")
map.set("IN", "India")

for(const key in map){
    console.log(key)
}