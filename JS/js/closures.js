//js waits for none


function x() {
    // for (var i = 1; i <= 5; i++) {//reference to i
    //     setTimeout(() => {
    //         console.log(i)
    //     }, i * 1000)
    // }

    // for(let i=1;i<=5;i++){ // block scope , new copy of i for every loop
    //     setTimeout(() =>{
    //         console.log(i)
    //     }, i*1000)
    // }
    // console.log("16")
}
x()
//sol'n with var

// function z() {
//     for (var i = 1; i <= 5; i++) {
//         function close(x) {
//             setTimeout(() => {
//                 console.log("second fun-x", x);

//             })
//         }
//         close(i)
//     }

// }
// z()

function outer(){
    var a = 10;
    function inner(){
        console.log("inner",a);
        
    }
    return inner;
}
outer()()
const check = outer()
check()

//constructor fun
function Counter(){
    let count = 0;
    this.increment = () =>{
        count++
        console.log(count,"inc");
        
    }
    this.decrement = function(){
        count--
        console.log(count,"dec");
    }
}

const count1 = new Counter()
count1.increment()
count1.increment()
count1.increment()
count1.increment()
count1.increment()
count1.increment()
count1.decrement()


