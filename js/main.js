let result = document.querySelector('.result-number')
let buttonsSign = document.querySelectorAll('.button-sign')
let buttonRemove = document.querySelector('.button--remove')
let buttonResult = document.querySelector('.button--result')
let buttonPrecent = document.querySelector('.button--percent')
let primeAnimation = document.querySelector('.primer')
let value
let numbersValuelength

const signAll = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '(', ')', '.', '%']
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const sign = ['+', '-', '*', '/', '(', ')', '%']
let numbersValue = []


let objElem = {
    numberFirst: [],
    signFirst: [],
    numberTwo: [],
    signTwo: [],
    numberThree: []
}

buttonsSign.forEach(button => {
    button.addEventListener('click', function () {
        value = result.value + button.innerHTML
        if (button.classList.contains('sign')) {
            value = result.value + ' ' + button.innerHTML + ' '
        } else {
            value = result.value + button.innerHTML
        }
        result.value = value
        primeAnimation.classList.remove('active')
    })
})

result.addEventListener('input', function () {
    value = result.value
})

buttonPrecent.addEventListener('click', function () {

})

buttonRemove.addEventListener('click', function () {
    result.value = ''
    primeAnimation.innerHTML = ''
})

buttonResult.addEventListener('click', function () {
    numbersValue = []
    objElem.numberFirst = []
    objElem.numberTwo = []
    objElem.numberThree = []
    objElem.signFirst = []
    objElem.signTwo = []
    createPrimeAnimation()
    createArrayAll()
    createResultNumber()
})

function createArrayAll() {
    for (let char of value) {
        if (signAll.includes(char)) {
            numbersValue.push(char)
        }
    }
}
function actionCreateNumberOrSign() {
    let counter = 0
    for (let i = 0; i <= numbersValuelength; ++i) {
        if (Number(numbersValue[i]) < 10 || numbersValue[i] === '.') {
            objElem.numberFirst.push(numbersValue[i])
            counter++
        } else break
    }
    for (let ind = 0; ind < counter; ind++) {
        numbersValue.shift()
    }
    switch (numbersValue[0]) {
        case '-':
            objElem.signFirst.push(numbersValue[0])
            break
        case '+':
            objElem.signFirst.push(numbersValue[0])
            break
        case '/':
            objElem.signFirst.push(numbersValue[0])
            break
        case '*':
            objElem.signFirst.push(numbersValue[0])
            break
        case '%':
            objElem.signFirst.push(numbersValue[0])
            break
    }
    numbersValue.shift()
    if (numbersValuelength) {
        counter = 0
        for (let i = 0; i <= numbersValuelength; ++i) {
            if (Number(numbersValue[i]) < 10 || numbersValue[i] === '.') {
                objElem.numberTwo.push(numbersValue[i])
                counter++
            } else break
        }
        for (let ind = 0; ind < counter; ind++) {
            numbersValue.shift()
        }
        switch (numbersValue[0]) {
            case '-':
                objElem.signTwo.push(numbersValue[0])
                break
            case '+':
                objElem.signTwo.push(numbersValue[0])
                break
            case '/':
                objElem.signTwo.push(numbersValue[0])
                break
            case '*':
                objElem.signTwo.push(numbersValue[0])
                break
        }
        numbersValue.shift()
    }
    if (numbersValuelength) {
        counter = 0
        for (let i = 0; i <= numbersValuelength; ++i) {
            if (Number(numbersValue[i]) < 10 || numbersValue[i] === '.') {
                objElem.numberThree.push(numbersValue[i])
                counter++
            } else break
        }
        for (let ind = 0; ind < counter; ind++) {
            numbersValue.shift()
        }
    }
}
function createResultNumber() {
    numbersValuelength = numbersValue.length
    actionCreateNumberOrSign()

    let numberTwoResult = Number(objElem.numberTwo.join(''))
    let numberFirstResult = objElem.numberFirst.join('')
    let numberFirstFinished = Number(numberFirstResult)
    let numberThreeResult = Number(objElem.numberThree.join(''))
    let resultTwoFinish
    let resultFinish
    if (objElem.signTwo[0]) {
        if (objElem.signTwo[0] === '*' || '/') {
            switch (objElem.signTwo[0]) {
                case '*':
                    resultFinish = numberTwoResult * numberThreeResult
                    break
                case '/':
                    resultFinish = numberTwoResult / numberThreeResult
                    break
            }

            switch (objElem.signFirst[0]) {
                case '-':
                    resultTwoFinish = numberFirstFinished - resultFinish
                    break
                case '+':
                    resultTwoFinish = numberFirstFinished + resultFinish
                    break
                case '*':
                    resultTwoFinish = numberFirstFinished * resultFinish
                    break
                case '/':
                    resultTwoFinish = numberFirstFinished / resultFinish
                    break
                case '%':
                    resultTwoFinish = numberTwoResult / 100 * resultFinish
                    break
            }
        } else {
            switch (objElem.signFirst[0]) {
                case '-':
                    resultFinish = numberFirstFinished - numberTwoResult
                    break
                case '+':
                    resultFinish = numberFirstFinished + numberTwoResult
                    break
                case '*':
                    resultFinish = numberFirstFinished * numberTwoResult
                    break
                case '/':
                    resultFinish = numberFirstFinished / numberTwoResult
                    break
                case '%':
                    resultFinish = numberTwoResult / 100 * numberFirstFinished
                    break
            }

            switch (objElem.signTwo[0]) {
                case '-':
                    resultTwoFinish = resultFinish - numberThreeResult
                    break
                case '+':
                    resultTwoFinish = resultFinish + numberThreeResult
                    break
                case '*':
                    resultTwoFinish = resultFinish * numberThreeResult
                    break
                case '/':
                    resultTwoFinish = resultFinish / numberThreeResult
                    break
            }
        }

    } else {
        switch (objElem.signFirst[0]) {
            case '-':
                resultFinish = numberFirstFinished - numberTwoResult
                break
            case '+':
                resultFinish = numberFirstFinished + numberTwoResult
                break
            case '*':
                resultFinish = numberFirstFinished * numberTwoResult
                break
            case '/':
                resultFinish = numberFirstFinished / numberTwoResult
                break
            case '%':
                resultFinish = numberTwoResult / 100 * numberFirstFinished
                break
        }
    }
    if (resultTwoFinish) {
        result.value = resultTwoFinish.toFixed(4)
    } else {
        result.value = resultFinish.toFixed(4)
    }
}
function createPrimeAnimation() {
    primeAnimation.innerHTML = result.value
    primeAnimation.classList.add('active')
}


