function addUsername(username){
    //DB call
    this.username = username
    console.log("addusername is called");
    
}

function createUser(username,email){
    addUsername.call(this,username)
    this.email = email

}

const username = new createUser('one','one@gmail.com')

console.log("username",username);

