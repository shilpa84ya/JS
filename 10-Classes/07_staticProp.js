class User{
    constructor(username){
        this.username = username
    }

    loggMe(){
        console.log("Username : ",this.username);
    }
     static createId(){  // to restrict the user to use it
        return "123"
    }
}

const user = new User("Shilpa")
user.loggMe()
console.log(user.createId())