const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toFixed(2));
const num = 23.946573
// console.log("num",num.toPrecision(3));

const hundereds = 1000000000000
console.log("hundereds",hundereds.toLocaleString('en-IN'));
//-------------Maths
//min max

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.floor(4.6));
console.log(Math.sqrt(16));
console.log(Math.max(1,2,3,4),Math.min(1,2,3,4));
console.log(Math.random());// always between 0-1
console.log(((Math.random())*10) + 1); // it can be 0 , so add 1 to avoid it

const min = 10
const max = 20

console.log(Math.floor((Math.random()) * (max-min+1)) + min);








