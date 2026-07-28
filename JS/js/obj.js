//singleton
// Object.create
// const webUser = new Object() ////singleton object
const user = {} //non-singleton obj

user.id=123
user.name='tommy'
user.isLoggedIn = true

const regularUser = {
    email:"samm@gmail.com",
    fullName:{
        fullname:{
            firstName:"Kim",
            lastName:"Tae"
        }
    }
}

const obj1 ={1:'10',2:"20"}
// const obj2 ={3:'30',2:"40",3:'50'}
const obj2 ={3:'30',4:"40",5:'50'}
const obj = Object.assign({},obj1,obj2)//Object.assign(obj1,obj2) - all values in assign(obj1,obj2) will go to obj1
const objj= {...obj1,...obj2}
console.log("OBJ3",obj,objj);
console.log("lkey",Object.keys(obj),);//datatype -[]
console.log("lkey",Object.entries(obj));//datatype -[[]]
console.log("pr",user.hasOwnProperty('name'));//datatype -[[]]
//////////////////---destucturing----------////////////////////

const {email,fullName:fn} = regularUser
console.log("destructured email",email,fn);









//
const sym = Symbol('key1')

//obj literals
const jsuser ={
    name:'madhu',
    "full name":'Madhu m',
    [sym]:'mykey1',//to use symbol
    age:'18',
    email:'m@gmail.com'
}

// console.log(jsuser['full name'],jsuser.name,jsuser[sym]);

// Object.freeze(jsuser)
// jsuser.email = 'aaa' //will not get changed when freezed
jsuser.greet = function (){
    // console.log(`hello ${this.name}`);//gives undefined
    return `hello ${this.name}`
    
}
console.log(jsuser.greet());
