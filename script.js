class Calculator{
    constructor(currentOutputTextElement,previousOutputTextElement){
        this.previousOutputTextElement = previousOutputTextElement
        this.currentOutputTextElement = currentOutputTextElement
        this.clear()
    }
    clear(){
        this.currentOutput = ''
        this.previousOutput = ''
        this.operation = undefined
    }

    appendNumber(num){
        if(num === '.' && this.currentOutput.includes('.')) return
        this.currentOutput = this.currentOutput.toString() + num.toString()
    }

    updateDisplay(){
        this.currentOutputTextElement.innerText = this.currentOutput
        this.previousOutputTextElement.innerText = this.previousOutput
     }

    delete(){
        const temp = this.currentOutput.split('')
        temp.splice(-1, 1)
        this.currentOutput = temp.join('')
    }

    getoperator(op){
        const kanan = this.previousOutput
        if(this.currentOutput === '')return
        if(kanan !== ''){
            this.operate()
        }
        this.operation = op
        this.previousOutput = this.currentOutput
        this.currentOutput = ''
        this.operate()
    }

    operate(){
        const symbol = this.operation
        const left = this.previousOutput
        const right = this.currentOutput
        this.answer
        if(right !== ''){
        switch(symbol){
            case '/':
                this.answer = left / right
                break
            case '*':
                this.answer = left * right
                break
            case '+':
                this.answer = parseFloat(left) + parseFloat(right)
                break
            case '-':
                this.answer = left - right
                break

                
        }
        this.currentOutput = this.answer.toString()
        this.previousOutput= '' }
    }
}

const numberButton = document.querySelectorAll('[data-number]')
const operationButton = document.querySelectorAll('[data-operation]')
const equals = document.querySelector('[data-equals]')
const previousOutputTextElement = document.querySelector('[data-previous-output]')
const currentOutputTextElement = document.querySelector('[data-current-output]')
const allClear = document.querySelector('[data-all-clear]')
const DEL = document.querySelector('[data-delete]')

const calculator = new Calculator(currentOutputTextElement, previousOutputTextElement)

numberButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButton.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.getoperator(button.innerText)
        calculator.updateDisplay()
    })
})

equals.addEventListener('click', () =>{
    calculator.operate()
    calculator.updateDisplay()
})

allClear.addEventListener('click', () =>{
    calculator.clear()
    calculator.updateDisplay()
})

DEL.addEventListener('click', () =>{
    calculator.delete()
    calculator.updateDisplay()
})