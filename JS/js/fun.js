//IIFE
//to remove globl scope polution we use iife

(function callBD(){ //named iife
console.log("DB connected!!!");

})();//; here to execute below fun

((name)=>{
    console.log(`${name}`);
})('Madhu')