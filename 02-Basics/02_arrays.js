const marvel_heros = ["thor","IronMan","spiderMan"]
const dc_heros = ["superman","Batman", "Flash"]

// marvel_heros.push(dc_heros)
console.log(marvel_heros) // [ 'thor', 'IronMan', 'spiderMan', [ 'superman', 'Batman', 'Flash' ] ]

// to add all the elemnts of both array use "concate"

// const allHeros = marvel_heros.concat(dc_heros) // [ 'thor', 'IronMan', 'spiderMan', 'superman', 'Batman', 'Flash' ]
// console.log(allHeros)

// // Spread Operator

// const all_new_heros = [...dc_heros, ...marvel_heros]
// console.log(all_new_heros)  // [ 'superman', 'Batman', 'Flash', 'thor', 'IronMan', 'spiderMan' ]

const a = [1,2,3, [4,5,6],7,[1,2,3,[4,5,6]]]
console.log(a)
// To make a new array of arrays with the depth use "flat()"

const newA = a.flat(Infinity)
console.log(newA)