// Object letrals


const user = {
    username :"Shilpa",
    id:49,
    isLoggedIn:false,
    getUserDetail: function(){
        console.log(`Username : ${this.username}`)
        console.log("Inside the user Object:\n",this)
    }
}
// console.log("Outside the Object:\n",this);
// console.log(user.getUserDetail());

function User(username, id,isLoggedIn){
    this.username = username;
    this.id = id;
    this.isLoggedIn = isLoggedIn;

    return User;
}

const userOne = new User("Shilpa", 49, true);
const userTwo = new User("Shalini", 40, false);

console.log(userOne);
console.log(userTwo);

