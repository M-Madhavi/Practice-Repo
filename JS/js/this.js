//this acts differently in strict and non strict mode
// "use strict"
//strict mode - (this substitution)

// if the value of this keyword is undefined or null -> this will be replaced with globalObject/window in  - NON STRICT MODE
// this in global space

// this
console.log(this); // gobalObject - window object -in Browser, in node - global


// this in functional space
//
function x() {
    console.log("fffffffff",this); //strict -> undefined
    // console.log(this); //non strict mode -> window

}
x()
// the value of this depends on how this is called 
// window.x() //-> window object

// this inside objects Method - points to obj
//if you make fun' as a part of object then it is called METHOD

const student = {
    a: 10,
    name: "kimtae",
    printName: function () {
        console.log(this); // value of this is obj
        console.log(this.name);

    }
}

student.printName()
// call,apply and bind Methods(sharing Methods)
const student2 = {
    a: 20,
    name: "Madhu"
}
student.printName.call(student2) // now thw value of this in student 1 will be come this = student2


//this in arrow fun'
//arrow fun' doesn't have there own this value, it takes this value from its lexical scoping
const obj = {
    a: 1,
    x: () => {
        console.log(this, "arrow fun"); //enclosing lexical context - here it is present in global space - window obj

    },
    y: function () {
        const z = () => {
            console.log("z", this); // obj - enclosing lexical context

        }
        return z()
    }
}
// obj.x()
obj.y()


// this in DOM -> reference to html element
// check this inside constructor ,class








