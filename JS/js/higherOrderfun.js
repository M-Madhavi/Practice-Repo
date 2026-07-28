const radius = [1, 2, 3, 4, 5, 6]

const area = function (radius) {
    return Math.PI * radius * radius
}

const circumference = (radius) => 2 * Math.PI * radius

const diameter = (radius) => 2 * radius

const calculate = function (radiusarr, logic) {
    const output = []
    for (let i = 0; i < radiusarr.length; i++) {
        output.push(logic(radiusarr[i]))
        // console.log('radius',radiusarr[i])
    }
    return output
}
console.log("output",calculate(radius,area));

