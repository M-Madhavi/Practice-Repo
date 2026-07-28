let name1={
    firstname:"Tae",
    lastName:'Kim',
    printFullName: function () {
        console.log(this.firstname+ " "+ this.lastName);
        
    }
}
// name1.printFullName()

let name2={
    firstname:"Madhu",
    lastName:'Markambai',
    // printFullName: function () {
    //     console.log(this.firstname+ " "+ this.lastName);
        
    // }
}

// using call we can do - fun' borrowing

// name1.printFullName.call(name2);


//or
let fullName = function (homeTown) {
    console.log(this.firstname+ " "+ this.lastName + ' from ' + homeTown);

}
fullName.call(name1,'South Korea')
fullName.call(name2,"India")


//APPLY - only difference between call and apply is how we pass the arguments- bind will take ARRAY - []
fullName.apply(name2,["India"])

//BIND - creates copy of fullName - which can be invoked later
let printMyName = fullName.bind(name1,'South Korea')
console.log("printMyName",printMyName);

printMyName()