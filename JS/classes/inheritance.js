class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        return `username is ${this.username}`
    }
}

class Teacher extends User {
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourses(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const one = new Teacher('teach','teach@gmail.com','teach')
console.log(one.addCourses());

const user = new User('user')

console.log(one === user);
console.log(one === Teacher);
console.log(one instanceof Teacher);
