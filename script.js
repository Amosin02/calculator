class Calculator{
    constructor(previousOutputTextElement,currentOutputTextElement){
        this.previousOutputTextElement = previousOutputTextElement
        this.currentOutputTextElement = currentOutputTextElement
        this.clear()
    }
    clear(){
        this.currentOutputTextElement = ''
        this.previousOutputTextElement = ''
    }

    appendNumber(number){
        this.currentOutputTextElement = this.currentOutputTextElement.toString() + number.toString()
    }

    updateDisplay(){
        this.currentOutputTextElement.innerText = this.currentOutput
        this.previousOutputTextElement.innerText = this.previousOutput
    }
}

const numberButton = document.querySelectorAll('[data-number]')
const operationButton = document.querySelectorAll('[data-operation]')
const equals = document.querySelector('[data-equals]')
const previousOutputTextElement = document.querySelector('[data-previous-output]')
const currentOutputTextElement = document.querySelector('[data-current-output]')
const allClear = document.querySelector('[data-all-clear]')
const negPos = document.querySelector('[data-neg-pos]')
const DEL = document.querySelector('[data-delete]')

const calculator = new Calculator(previousOutputTextElement, currentOutputTextElement)

numberButton.forEach(button => { //issue here
    button.AddEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay() 
    })
})
