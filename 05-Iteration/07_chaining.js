const myNum = [1,2,3,4,5,6,7,8]


// this is called chaning
const newNumber = myNum
                       .map((num)=>num*10)
                       .map((num)=>num+1)
                       .filter((num) => num>=40)

console.log(newNumber)

// here map is used to perform some action on each elements