// object declaration
const tinderUser = {} // singleton object
const ob =  Object() // Non_singleton object
//console.log(obj2)

tinderUser.name ="sam"
tinderUser.id = "123abc"
tinderUser.isloggedIn=false

//Nesting of objects

const user = {
    email: "shilpa@gmail.com",
    fullName: {
        username:{
            firstName: "Shilpa",
            lastName : "Chaurasiya"
        }
    }
}

// console.log(user.fullName.username)/

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a", 6:"b"}

// 1. Method
const allObject = Object.assign(obj1,obj2,obj3) 

//2. Method (using Spread operator)
const obj4 = {...obj1, ...obj2 , ...obj3}
// console.log(obj4)

// console.log(allObject)

//Arrays of Objects

const users = [
    {
        id: 49,
        email : "shilpa@gmail.com"
    },
    {
        id:101,
        email:"shalini@gmail.com"
    },
    {
        id:102,
        email:"tanu@gmail.com"
    }
]

// console.log(users[1].email)

// To get the all keys of an object
// console.log(Object.keys(tinderUser)) // [ 'name', 'id', 'isloggedIn' ]
// console.log(Object.values(tinderUser)) //. [ 'sam', '123abc', false ]
// console.log(Object.entries(tinderUser))  // [ [ 'name', 'sam' ], [ 'id', '123abc' ], [ 'isloggedIn', false ] ]


// // To check if the object has a particular property or not
// console.log(tinderUser. hasOwnProperty("isloggedIn"))

// ########################## DE-STRUCTURING ##################################



const course ={
    courseName : "JS",
    cousrsePrize:"999",
    courseInstructore: "Ranga"
}

// Instead of course.courseInstructore we can write such as

const {courseInstructore} = course
console.log(courseInstructore)
// To short the name or to take alias
const {courseInstructore: instructore} = course
// now we can use just instructore
console.log(instructore)


// ################################# API #####################################

/*. Formate of API
{
   id : 1423,
   name: "shilpa"
}

[
   {},
   {},
   {},
]
*/