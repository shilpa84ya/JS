const myDate = new Date()
// console.log(myDate) //2024-09-22T18:19:10.443Z
// console.log(myDate.toDateString())         // Sun Sep 22 2024
// console.log(myDate.toISOString())         // 2024-09-22T18:19:10.443Z
// console.log(myDate.toJSON())              // 2024-09-22T18:19:10.443Z
// console.log(myDate.toLocaleDateString())  // 9/22/2024
// console.log(myDate.toLocaleString())     // 9/22/2024, 6:19:10 PM
// console.log(myDate.toTimeString())       // 18:19:10 GMT+0000 (Coordinated Universal Time)


const createdDate = new Date(2025,3,2,8,22)
// console.log(createdDate.toDateString())
// console.log(createdDate.toLocaleString());


const myTimeStamp = Date.now();
console.log(myTimeStamp)
console.log(createdDate.getTime())


let newDate = new Date()
console.log(newDate.getMonth()+1); // +1 to show the the month as month is start from 0 (indexed)
console.log(newDate.getDate());
