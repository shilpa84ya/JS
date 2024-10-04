class User{
    constructor(username){
        this.username = username;
    }
    loggme(){
        console.log("Username is :",this.username);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addSubject(){
        console.log("new subject is added by :", this.username)
    }

}

const teacher = new Teacher("Shilpa", "shilpa@gmail.com","123")
console.log(teacher);
teacher.addSubject()
teacher.loggme();

