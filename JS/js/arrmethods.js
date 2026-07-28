const radius = [1, 2, 3, 4, 5, 6]

const double = radius.map((r) => r * 2)
// console.log(double)

//binary
const binary = function (val) {
    return val.toString(2)
}

const checkBinaryRes = radius.map((val) => val.toString(2))
// console.log("checkBinaryRes",checkBinaryRes)

const filtercheck = radius.filter((r) => r >= 4)
const isOdd = radius.filter((r) => r % 2) //r % 2 === 0->odd
// console.log(isOdd, "filtercheck")


const checkreduce = [1, 2, 3, 4, 5, 6, 7, 8]

const checkReduce = checkreduce.reduce((acc, arr) => {
    console.log("arr", acc, arr)
    return acc + arr
}, 0)

const findMax = checkreduce.reduce((max, curr) => {
    if (curr > max) {
        max = curr
    }
    return max

}, 0)

// console.log(checkReduce, "checkReduce")
// console.log(findMax, "findMax")

const users = [
    { firstName: "user1", lastName: "last1", age: 6 },
    { firstName: "user2", lastName: "last2", age: 16 },
    { firstName: "user3", lastName: "last3", age: 26 },
    { firstName: "user4", lastName: "last4", age: 36 },
    { firstName: "user5", lastName: "last5", age: 46 },
    { firstName: "user6", lastName: "last6", age: 56 },
    { firstName: "user7", lastName: "last7", age: 26 }

]

const fullName = users.map((u) => u.firstName + " " + u.lastName)
// console.log(fullName, "fullName")
// ---------------REDUCE--------------------
const count = users.reduce((acc, curr) => {
    // console.log(acc, curr, "acc curr") 
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age]
    } else {
        acc[curr.age] = 1
    }

    return acc

}, {})
// console.log(count, "count")
const fname = []
const compute = users.filter((u) => {
    if (u.age < 30) {
        return fname.push(u.firstName)
    }
})
// console.log(compute,fname, "compute")


const preciseway = users.filter((u) => u.age < 30).map((u) => u.firstName)
// console.log(preciseway, "preciseway")

//use reduce for preciseway

const test = users.reduce((acc,curr) => {
    if(curr.age < 30){
        acc.push(curr.firstName)
    }
    return acc
},[])
// console.log(test, "test")
// -----------------------------------------------------------------------

//shallowCopy - changes the original array
//deepCopy - properties do not share the same reference
const myArr = new Array(1,2,3,4,5)

myArr.unshift(9)// - adds number at 0th index - not recomended cause it has optimisation issue
// console.log(myArr, "myArr")
myArr.shift() //- removes zeroth index
// console.log(myArr, "shiftmyArr")

//////////////SLICE or SPLICE(changes the original array)
myArr.push("A","B")
console.log(myArr.slice(5,6), "myArr") // includes index 5 and exclude 6 
console.log(myArr, "BEFOR") // includes index 5 and exclude 6 
console.log(myArr.splice(1,3), "SPLICE") // includes index 5 and exclude 6 
console.log(myArr, "AFTER") // includes index 5 and exclude 6 
// -------------------------------------------------------------------------------------------------------------------

const marvel_heros = ['Thor','Ironman','DoctorStanger','Hulk']
const dc_heros = ['spiderman','batman']
// marvel_heros.push(dc_heros)

// console.log("marvel_heros",marvel_heros);
marvel_heros.push(...dc_heros) //or const test = [...mc_heros,...dc_heros]
console.log("marvel_heros-----",marvel_heros);

const combine  = marvel_heros.concat(dc_heros)
console.log("combine",combine);

const m_heros = ['Thor','Ironman','DoctorStanger','Hulk',[1,2,3,4],7,[6,7,[8,9]]]

const arr = m_heros.flat(2)

console.log("arr",arr);

const array = Array.isArray('Madhu')
console.log("Array",array);

console.log("Array",Array.from('MadhuV'));

console.log("Array",Array.from({name:'MadhuV'}));//Intrestingggggggggggg

let s1=100
let s2=200
console.log(Array.of(s1,s2));


const colors = ['red', 'green', 'blue'];

// Destructuring assignment
const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor);  // 'red'
console.log(secondColor); // 'green'
console.log(thirdColor);  // 'blue'
















