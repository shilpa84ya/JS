// creating a promise

const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Tast is Complete");
        resolve();
    },1000)
});

promiseOne.then(function(){  // here resolve() is directly connected to then()
    console.log("Promise consumed")
})

// Another way to do that

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Tast2");
        resolve();
    },1000)
}).then(function(){
    console.log("Promise2 is completed");
})

//Promise 3
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("promise3 created");
        resolve({username:"Shilpa", email: "shilpa@gmail.com"});
    },1000)
})

promiseThree.then(function(userInfo){
    console.log(userInfo)
})

// promise4 using chaining

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Promise 4 is created");
        let error = true;
        if(!error){
            resolve({username:"Shalini", password:"123"});
        } else{
            reject("Somthing went wrong");
        }
    },1000)
}).then(function(user){
    console.log(user);
    return user.username;  // then will return the username 
}).then( (username) =>{   // this then will get that return username
    console.log(username);
}).catch( (error)=>{  // handling the error
    console.log(error);
}).finally( ()=>{
    console.log("The promise is either resolved or rejected");
})


// asyncWait will wait for somtimes until your promise is completed otherwise it give error at that time only

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Promise 5 is created")
        let error = true;
        if(!error){
            resolve({username:"javaScript", password : "123"});
        }
        else{
            reject("ERROR: JS went wrong");
        }
    },1000);
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumePromiseFive()


// using fetch() getting all the userinfo from a google url

async function allUserInfo(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        // convert it into the json formate

        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log("Error: ",error);
    }
}

// allUserInfo();

// another metho to do this using then()

fetch("https://jsonplaceholder.typicode.com/users").
then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log("Error: ", error);
})