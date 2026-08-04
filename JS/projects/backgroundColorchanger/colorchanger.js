const hex = "0123456789ABCDEF"
//const randomNumberselector = Math.floor(Math.random()*16)
function randomColor() {
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}
// const randomcolor = randomColor()
// console.log(randomcolor);
let interval;
function start() {
    console.log("in start");
    document.body.style.backgroundColor = randomColor()
}
const changeBackgroundColor = () => {
    console.log("clicked start");
    if (!interval) {
        interval = setInterval(start, 1000)
    }
}
const stopBackgroundColorChange = () => {
    clearInterval(interval)
    interval = null
}
document.getElementById('start').addEventListener('click', changeBackgroundColor)
document.getElementById('stop').addEventListener('click', stopBackgroundColorChange)

