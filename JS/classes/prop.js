class User{
    constructor(username){
    this.username = username
    }

    logMe(){
        console.log(`username ${this.username}`);
        
    }

    static createId(){ // to not give access to any new instances created
        return `123`
    }
}

const madhu = new User('madhu')
// console.log(madhu.createId());//will not have access cause of STATIC KEY


class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone =  new Teacher('iphone','iphone@gmail.com')
console.log(iphone);
// console.log(iphone.createId()); will not have access

