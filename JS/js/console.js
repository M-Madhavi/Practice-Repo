console.log(true); //true
console.log(+true);// 1
console.log("");//''
console.log(+"");//0
console.log(1+"2");
console.log("1"+2);//12
console.log("1"+2+2);//122
console.log(22+3+"2"+2);//29
console.log(null);//obj
console.log(undefined);//un
console.log(typeof null);//obj
console.log(typeof undefined);//un
console.log(Boolean(""));


console.log("2" > 1);
console.log("02" > 1);
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
console.log(NaN > 1);

console.log(1-"2");

// Primitive - string,number,boolean,null, undefined,symbol,bighit
//non-primitive - arrays,objetcs,functions
// stack(primitives type) - changes the value in the copy
//heap memory (non-primitives) - changes the value in actual(original) value

const id = Symbol('123')
const aid = Symbol('123')

// console.log(id===aid)//false
//id!=aid


const a=[]
const obj={}
const fun = function (params) {
    
}
console.log(typeof a,typeof obj,typeof fun);//typeof fun - function obj





///////////////-------------TRUTHY/FALSY-VALUES -----------///////////////

//--- Empty string is false
// fallsy values - false,0,-0,BigInt 0n,"",null, undefined, Nan
// truthy - true,"0",'false'," ",[],{},function(){} 
const objCheck ={}
if(!Object.keys(objCheck).length){
    console.log("objCheck is empty Object");
    
}
//////////Nullish coalescing Operator (??)-> works for - null or undefined
let val1;

// val1 = 5 ?? 10
val1 = null ?? 10





