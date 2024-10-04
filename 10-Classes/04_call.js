function setUsername (username){
    // coplex DB calculation
    this.username = username;
    console.log("Called");
    
}

function User(username, email, password){
    // setUsername(username) // it is calling the function but after the call is over all the reference of setUsername() is removed.
    setUsername.call(this,username)                       //to hold the reference of setUsername() 
    this.email = email
    this.password = password

}

const user = new User("Shilpa","shilpa@gmail.com", "123")
console.log(user);
