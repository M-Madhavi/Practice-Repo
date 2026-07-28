console.log("Start");

setTimeout(() => {
    console.log("settimeout");

}, 0);

console.log("End");

const date = new Date().getTime()

let endDate = date
while (endDate < date + 10000) {
    endDate = new Date().getTime()
    // console.log("Date matched");

}
console.log("Last log");

// console.log("Start");

// setTimeout(() => {
//     console.log("settimeout");
// }, 0);

// console.log("End");

// const date = Date.now();
// let endDate = date;

// while (endDate < date + 10000) {
//     endDate = Date.now();
// }

// console.log("Last log");

