//Fun's are first cls citizens

//IIFE
(function () {
    console.log("Hello!");
})()

// Anonymous fun
// function () {
//     console.log("Hello!");
// }
//fun statement aka fun Declaration
a()//diff b/w state and Exp is Hoisting
function a() {
    console.log("A!");
}
//fun Expression  
var b = function () { //we can assign Ananymous fun to variables
    console.log("B!");
}

//fun Declaration
var b = function a() {
    console.log("B!");
}
b()

//Named fun' expression

var c = function xyz(paramameters) {
    console.log(xyz, "xyz");

}
//xyz(Arguments) -> throws err xyz is not defined

//First cls fun - the ability to use functions as values and return

function fcls(param) {
    console.log("fclsfun", param)
}

fcls(function () {

})

//Arrow fun

const arr = () => console.log("Arrow fun")

/////////------------

function add(a,b,c,d,e){    
    return a+b+c+d+e
}
// add(10+4+5+23+30)
console.log("add",add(10,4,5,23,30));
console.log("add",add());//for strings- undefined, numbers -NaN->if you don't pass value

function check (val1,val2,...rest){    
    return rest
}
console.log("check",check(10,4,5,23,30));



