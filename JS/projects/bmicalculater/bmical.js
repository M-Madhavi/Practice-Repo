const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    console.log("height", height, "weight", weight);
    const res = document.querySelector("#results");
    const response = document.querySelector('#response')
    let bmi
    if (
        height <= 0 ||
        height == "" ||
        weight <= 0 ||
        weight == "" ||
        isNaN(height) ||
        isNaN(weight)
    ) {
        res.innerHTML = `<span>please enter valid height and weight values</span>`;
    } else {
        bmi = (weight / ((height * height) / 10000)).toFixed(2);
        res.innerHTML = `<span>Your BMI result: ${bmi}</span>`;
    }
    // JavaScript evaluates the switch expression once, evaluates each case expression, and compares them using === (strict equality).
    // so,i'm using true in switch
    //better to us if else
    switch (true) {
        case bmi < 18.5:
            response.innerHTML = `<span>you are Underweight:${bmi}</span>`;
            console.log("you are Underweight");
            break;
        case bmi >= 18.5 && bmi < 29.9:
            response.innerHTML = `<span>you have a healthy weight!!!:${bmi}</span>`;
            console.log("you have a healthy weight!!!");
            break;

        case bmi > 30:
            response.innerHTML = `<span>you are overweight and Obese:${bmi}</span>`;
            console.log("you are overweight and Obese");
            break;
        default:
            console.log("indefault");
            break;
    }
    form.reset()

});
