let result = document.querySelector('.result-number')
let buttonsSign = document.querySelectorAll('.button-sign')
let buttonRemove = document.querySelector('.button--remove')
let buttonResult = document.querySelector('.button--result')
let value

const signAll = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '(', ')']
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const sign = ['+', '-', '*', '/', '(', ')']
let numbersValue = []
let numberFirst = []
let signFirst = []
buttonsSign.forEach(button => {
    button.addEventListener('click', function () {
        value = result.value + button.innerHTML
        result.value = value
    })
})

result.addEventListener('input', function () {
    value = result.value
})

buttonRemove.addEventListener('click', function () {
    result.value = ''
})

buttonResult.addEventListener('click', function () {
    numbersValue = []
    numberFirst = []
    signFirst = []

    createArrayAll()

    createNumbersOrActions()
    console.log('numbersResult', numberFirst)
    console.log('numbersValue', numbersValue)
    console.log('signFirst', signFirst)
})

function createArrayAll() {
    for (let char of value) {
        if (signAll.includes(char)) {
            numbersValue.push(char)
        }
    }
}

function createNumbersOrActions() {
    let counter = 0
    let numbersValuelength = numbersValue.length
    for (let i = 0; i <= numbersValuelength; ++i) {
        if (Number(numbersValue[i]) < 10) {
            numberFirst.push(Number(numbersValue[i]))
            counter++
        } else break
    }
    for (let ind = 0; ind < counter; ind++) {
        numbersValue.shift()
    }

    for (let i = 0; i <= numbersValuelength; ++i) {
        switch (numbersValue[i]) {
            case '-':
                signFirst.push(numbersValue[i])
                break
            case '+':
                signFirst.push(numbersValue[i])
                break
            case '/':
                signFirst.push(numbersValue[i])
                break
            case '*':
                signFirst.push(numbersValue[i])
                break
        }
    }
    numbersValue.shift()
    let numberTwoResult = Number(numbersValue.join(''))

    let numberFirstResult = Number(numberFirst.join(''))
    let resultFinish
    switch (signFirst[0]) {
        case '-':
            resultFinish = numberFirstResult - numberTwoResult
            break
        case '+':
            resultFinish = numberFirstResult + numberTwoResult
            break
        case '*':
            resultFinish = numberFirstResult * numberTwoResult
            break
        case '/':
            resultFinish = numberFirstResult / numberTwoResult
            break

    }
    console.log(numberFirstResult)
    result.value = resultFinish
}


// let numberOne = document.querySelector('#number--one')
// let numberTwo = document.querySelector('#number--two')
// let buttonPlus = document.querySelector('.button--plus')
// let buttonMinus = document.querySelector('.button--minus')
// let buttonMultiplication = document.querySelector('.button--multiplication')
// let buttonDivision = document.querySelector('.button--division')
// function operation(sign) {
//     if(sign == '+') {
//         result.value = Number(numberOne.value) + Number(numberTwo.value)
//     } else if(sign == '-') {
//         result.value = Number(numberOne.value) - Number(numberTwo.value)
//     } else if(sign == '*') {
//         result.value = Number(numberOne.value) * Number(numberTwo.value)
//     } else if(sign == '/') {
//         result.value = Number(numberOne.value) / Number(numberTwo.value)
//     }
// }

// buttonPlus.addEventListener('click', function() {
//     operation('+')
// })
// buttonMinus.addEventListener('click', function() {
//     operation('-')
// })
// buttonMultiplication.addEventListener('click', function() {
//     operation('*')
// })
// buttonDivision.addEventListener('click', function() {
//     operation('/')
// })

