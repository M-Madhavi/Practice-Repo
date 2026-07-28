for (let index = 0; index < 10; index++) {
  const element = index;
  // console.log(element);
}
// console.log("var index out",index);

//break and continue

//executes only whren condition is true
let str;
str = 1;
let num = 1;
while (str <= 10) {
  // console.log("prints only if condition is trur",str);
  str++;
}

//prints ateleast once even when the condition is false
do {
  // console.log("prints atleast once even when the condition is false",num);
  num++;
} while (num < 10);

//for of
let array = "hello"; //['a', 'b']
for (const value of array) {
  // console.log("value", value);
}

///////////------------MAP
const map = new Map(); // for in won't work on thos
// console.log("map",map);
map.set("IN", "India");
map.set("UK", "United Kingdom");
map.set("SK", "South Korea");
map.set("US", "United States");
map.set("SW", "Swizerland");
map.set("SW", "Swizerland");

// map.delete("SW");
// console.log("Ater",map);
// mapKey [ 'IN', 'India' ]
// mapKey [ 'UK', 'United Kingdom' ]
// mapKey [ 'SK', 'South Korea' ]
// mapKey [ 'US', 'United States' ]
// mapKey [ 'SW', 'Swizerland' ]
for (const [key, value] of map) {
  // console.log("mapKey",key,value);
}
/////////////////----------object - for In-----------//////////
let object = {
  name: "a",
  age: 10,
};
for (const key in object) {
  // console.log(`key is ${key} and value:${object[key]}`);
}

const arraycheck = ["a", "b"];
for (const key in arraycheck) {
  //this works
  // console.log(arraycheck[key]);
}
//forEach() does not return a new array,It always returns undefined, so this:
//forEach - changes the original Array
let arrymap = [
  {
    name: "madhu",
    star: "top",
    num: 4,
  },
  {
    name: "tae",
    star: "idol",
    num: 3,
  },
]; //['a','b','c','d','e','m','v']
// const checkValue = arrymap.forEach((val,index,arr) => val.num = val.num*2 )-----IMPROTANT - checkValue -> returns - undefined
arrymap.forEach((val, index, arr) => (val.num = val.num * 2));
// console.log("changed arrymap " ,arrymap)

function logMapElements(value, key, map) {
  // console.log(`m[${key}] = ${value}`);
}

let startmap = new Map([
  ["foo", 3],
  ["bar", {}],
  ["baz", undefined],
]);
startmap.forEach(logMapElements);
// console.log(startmap);

////////////-----------map
const check = arrymap.map((val) => val.num + 4);
// console.log("check " ,check)
// console.log("map did not change arrymap array" ,arrymap)

const numf = [15, 22, 9, 41];
const filtered = numf.filter((val) => val > 20); //->doesn't change original arr
// or
// numf.filter((num) =>{
//     return num >20
// })
///-----------------check----------
// let newnums
// newnums = numf.forEach((num) =>{
//     if(num >20){
//         return num //
//     }
// })
// console.log("newnums",newnums);// will give undefined
//-------------------------------
const newnums = [];
numf.forEach((num) => {
  if (num > 20) {
    newnums.push(num);
  }
});

// console.log("numf",filtered,"newnums",newnums);
const books = [
  {
    title: "The Hobbit",
    edition: "3rd",
    genre: "Fantasy",
    published: 1937,
  },
  {
    title: "Clean Code",
    edition: "1st",
    genre: "Programming",
    published: 2008,
  },
  {
    title: "The Pragmatic Programmer",
    edition: "2nd",
    genre: "Programming",
    published: 2019,
  },
  {
    title: "Atomic Habits",
    edition: "1st",
    genre: "Self-Help",
    published: 2018,
  },
  {
    title: "1984",
    edition: "1st",
    genre: "Dystopian",
    published: 1949,
  },
  {
    title: "To Kill a Mockingbird",
    edition: "50th Anniversary",
    genre: "Classic",
    published: 1960,
  },
  {
    title: "The Alchemist",
    edition: "25th Anniversary",
    genre: "Fiction",
    published: 1988,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    edition: "1st",
    genre: "Fantasy",
    published: 1997,
  },
];
const filterFantacy = books.filter((book) => book.genre === "Fantasy");
const filterPublished = books.filter((book) => {
  return book.published > 1995 && book.genre === "Fantasy";
});
//   console.log("filterFantacy",filterFantacy,"filterPublished",filterPublished);

////
const currentYear = new Date().getFullYear();
console.log("currentYear", currentYear);
books.forEach((book) => {
  book.age = currentYear - book.published;
  return book.age;
});
console.log("chnaged books", books);

//   const mapNewValue = books.map((book) => {
//      book.age = currentYear - book.published
//      return book.age
//   })
//   console.log("mapNewValue",mapNewValue);

const red = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const mytotal = red.reduce((acc, current) => ( acc + current), 0);
console.log("red", mytotal);

const cart = [
    {
      id: 1,
      product: "Laptop",
      category: "Electronics",
      price: 75000,
      quantity: 1,
      inStock: true
    },
    {
      id: 2,
      product: "Wireless Mouse",
      category: "Electronics",
      price: 1200,
      quantity: 2,
      inStock: true
    },
    {
      id: 3,
      product: "Notebook",
      category: "Stationery",
      price: 100,
      quantity: 5,
      inStock: true
    },
    {
      id: 4,
      product: "Water Bottle",
      category: "Home",
      price: 500,
      quantity: 1,
      inStock: false
    },
    {
      id: 5,
      product: "Headphones",
      category: "Electronics",
      price: 2500,
      quantity: 1,
      inStock: true
    }
  ];
