function multiplybyfive(num){
    return num*5

}
multiplybyfive.power = 2
console.log(multiplybyfive(5));
console.log(multiplybyfive.power);
console.log(multiplybyfive.prototype);

function createUser(username,score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.print = function(){
    console.log(`the score is ${this.score}`);
    
}

const userOne = new createUser("one",95)
const userTwo = new createUser("two",99)

userOne.print()
