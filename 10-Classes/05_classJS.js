// class User{
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const user = new User("Shilpa","shilpa@gmail.com","123")
// console.log(user);
// console.log(user.changeUsername());
// console.log(user.encryptPassword());


// Behind the scene

function user(username, email, password){
     this.username = username
     this.email = email
     this.password = password
}

user.prototype.changeUsername = function(username){
     return `${this.username.toUpperCase()}`
    
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

const user1 = new user("Shilpa","shilpa@gmail.com","123")
console.log(user1);
console.log(user1.changeUsername());
console.log(user1.encryptPassword());