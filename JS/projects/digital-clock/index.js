const clock = document.getElementById('clock')


function updateClock() {
    let date = new Date()
    clock.textContent = `${date.toLocaleTimeString()}`
}
// functionName → the function itself (a reference).
// functionName() → execute the function immediately.

updateClock()// updateClock() -> calls immediately right now
setInterval(updateClock, 1000);//updateClock - if we pass reference of fun' it will call for every interval