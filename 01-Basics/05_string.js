const name = "Shilpa"
const repoCount = 10

//String concatination
console.log("hello my name is "+ name+" and my repoCount is "+repoCount ) // this is not recommended

// instead use this
console.log(`Hello my name is ${name} and my repocount is ${repoCount} `)

// string can also be declared as:
const gameName = new String("Mario")
console.log(gameName.length)
console.log(gameName.toLocaleLowerCase())

console.log(gameName[3])


const str = "Shilpa"
console.log(str.slice(0,4))
console.log(str.slice(0,-2))