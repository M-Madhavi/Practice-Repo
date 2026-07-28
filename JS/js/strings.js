const name = "madhu"
const repo = '50'
//string interpolation
console.log(`hi my name is ${name} and my repo count is ${repo}`); 

const hero = new String("Doctor-stranger") // gives array
console.log("hero",hero[3]);
console.log("proto",hero.__proto__,hero.length,hero.toLocaleUpperCase());

console.log("char",hero.charAt(3));
console.log("index",hero.indexOf('o'),hero.indexOf('m'));

const newstr = hero.slice(-1,4)//hero.substring(0,6)
console.log("newstr--",newstr);

const url ='https://madhavi.com/madhavi%20madhu'

const check = url.replace('%20','-')
console.log("url--",check,url.includes('madhu'));
//convert to array
console.log("split",[...hero],Array.from(hero) );
console.log("split",hero.split());


