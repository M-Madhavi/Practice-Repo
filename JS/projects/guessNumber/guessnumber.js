let randomNumber = parseInt(Math.random() * 100 + 1)

const form = document.querySelector('form')
const submit = document.querySelector('#submit')
const userInput = document.querySelector('#guessFeild')
const previousgusses = document.querySelector('.guesses')
const remainingNum = document.querySelector('.lastResult')
const message = document.querySelector('.loworhigh')
const resultparams = document.querySelector('.resultparams')


console.log("randomNumber", randomNumber);
const p = document.createElement('p')

let palyGame = true
let guessedNumbers = []
let remainingAttemts;

if (palyGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        const guessnum = parseInt(userInput.value)

        if (guessnum < 0 || guessnum === 0 || guessnum > 100 || isNaN(guessnum) || !guessnum || guessnum === '') {
            alert('please enter a valid number between 1 and 100')
            userInput.value = ''
        }

        else {
            validate(guessnum)
        }
    })
}

function validate(guessnum) {
    if (guessnum && guessnum < randomNumber) {
        message.innerHTML = `<p>${guessnum} is lower than the number you are guessing</p>`
    }
    else if (guessnum > randomNumber) {
        message.innerHTML = `<p>${guessnum} is greater than the number you are guessing</p>`
    }
    guessedNumbers.push(guessnum)
    dispalyMessage(guessnum, guessedNumbers)

}

function dispalyMessage(guessnum, guessedNumbers) {
    previousgusses.innerHTML = `${guessedNumbers.join(',')}`
    remainingNum.innerHTML = `${10 - (guessedNumbers.length)}`

    // console.log("guessnum", guessnum, randomNumber);

    if (guessnum === randomNumber) {
        alert('Yaaah You Gussed It Right🔥✌🏼')
        userInput.setAttribute('disabled', '')
        message.innerHTML = ''
        submit.disabled = true;
        startNewGame()
    }
    if (guessedNumbers.length >= 10) {
        alert('You are out of your moves')
        message.innerHTML = ''
        endgame()
    }

    userInput.value = ''
}

function endgame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    guessedNumbers = []
    palyGame = false
    startNewGame()
}

function startNewGame() {
    p.classList.add('button')
    p.innerHTML = `<h2 id='newgame'>Start New Game</h2>`
    resultparams.appendChild(p)
    p.addEventListener('click', (e) => {
        e.preventDefault()
        userInput.value = ''
        userInput.removeAttribute("disabled");
        guessedNumbers = []
        previousgusses.innerHTML = ''
        remainingNum.innerHTML = 10
        randomNumber = parseInt(Math.random() * 100 + 1)
        console.log("clicked", randomNumber);
        p.innerHTML = ''
        submit.disabled = false;
        palyGame = true
    })


}

