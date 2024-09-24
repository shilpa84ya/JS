// const coding = ["java",'c++','ruby','python']

// const values = coding.forEach( (items) => {
//     // console.log(items)
//     return items
// })

// console.log(values)

// Filter

const myNum = [2,3,67,98,90,21,32,40]

const newNumber = myNum.filter( (num) => num > 20 )
// console.log(newNumber) // [ 67, 98, 90, 21, 32, 40 ]


// Or

const newNumber2 = myNum.filter( (num) => {  
      return num > 20
})
// console.log(newNumber2)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  // filter out and print all the books in an array


// const userBooks = books.filter( (obj) =>{
//     return obj.title
// } ) 


// Without Filter
// const userBooks = []
// books.forEach( (obj) => {
//     if(obj.genre == "History")
//     userBooks.push(obj.title)
// })

// // with filter give the title of book whose genre is "History"
// const userBooks = books.filter( (obj) =>{
//     if(obj.genre == 'History')
//         return obj.title
// })


// Filter out the books which has been published after 2000

const userBooks = books.filter( (obj) => {
    return obj.publish >= 1900 && obj.genre === 'History'
}) 
console.log(userBooks)
