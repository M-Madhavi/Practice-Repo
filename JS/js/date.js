const date = new Date()

console.log(typeof date);
console.log(date.toISOString(),"toString", date.toString(),"locale", date.toLocaleString());

let mydate = new Date(2026,6,7,4,4)
console.log("mydate",mydate.toDateString());
console.log("lo",mydate.toLocaleString());
let timestamp = Date.now()
console.log("timestamp",timestamp);
// console.log("timestamp",timestamp.getMonth());



