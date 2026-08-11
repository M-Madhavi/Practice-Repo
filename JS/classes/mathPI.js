// const newObj= {
//     username:'hey'
// }
// console.log(Math.PI); 
// Math.PI = 5 //you can't overwrite


const descriptor = Object.getOwnPropertyDescriptors(Math,'PI')
console.log(descriptor);

const myObj ={
    name:'Madhu',
    isLoggedIn:true,
    isSoftwareEngineer: function () {
        return `Is Software Engineer`
    }
}

console.log('myobj',myObj);
console.log('myobj descriptor',Object.getOwnPropertyDescriptors(myObj,'name'));

Object.defineProperty(myObj,'name',{
    writable: false, 
    enumerable:false // you cannot itterate in the below loop
})
console.log('Afer',Object.getOwnPropertyDescriptors(myObj,'name'));

for (let [key,value] of Object.entries(myObj)) {
    if(typeof value !== 'function'){
    console.log(`key:value- ${key}: ${value}`);

    }
    
    
}

