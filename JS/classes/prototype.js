let name = "Madhu  "
// console.log(name.truelength);


let marvel = ['Thor', 'Ironman', 'Doctor Stranger', 'Spiderman', 'Black Panther']

let helloMarvel = {
    thor: 'sling',
    ironMan: 'sheild',
    getIronmanPower: function () {
        console.log(`the IronMan power is ${this.ironMan}`);

    }
}

helloMarvel.getIronmanPower()
//object will be in high level hierarchy 
//If we inject new method in top level(object) it will be accesable to Arrays and functions
Object.prototype.Madhu = function () {
    console.log(`Hello Madhu is in top level hierarchy which is Object`);

}
helloMarvel.Madhu()
// now check if we inject any property in array will you be able to access in object - no cause Array is in lower hierarchy when obpared to object so object will not have array injected properties
Array.prototype.heyArray = () =>{
    console.log(`heyArray is injected in Array`);
    
}
// helloMarvel.heyArray() //we will not be able to access this
marvel.heyArray()

//Inheritance

const teacher = {
    makeVideo:true,

}
const teachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'js assignment',
    fulltime:true,
    __proto: teachingSupport //now you will have access to all the teachingSupport object
}
teacher.__proto__=helloMarvel

//modern syntax

Object.setPrototypeOf(teachingSupport,teacher)


let anotherUser ="check     length    "

String.prototype.trueLength = function(){
    // this.name = name
    // this.anotherUser = anotherUser
    // console.log(`${this.name}`);
    console.log(`true length ${this.trim().length}`);
    
}
name.trueLength()
anotherUser.trueLength()

// console.log("truelength",);
