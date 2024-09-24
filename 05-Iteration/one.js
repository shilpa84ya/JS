const myArray = ["flash", "batman","superman"]

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element)
// }

// for(let i = 1; i<=10;i++){
//     console.log("For value: ",i)
//     for(let j =1;j<=10;j++){
//         console.log(`${i} * ${j} = ${i*j}`)
//        }
// }

for(let i = 1; i<=10;i++){
    if( i == 5){
        console.log("Detected 5")
        break
    }
    console.log("For value: ",i)
    
}

for(let i = 1; i<=10;i++){
    if( i == 5){
        console.log("Detected 5")
        continue
    }
    console.log("For value: ",i)
    
}