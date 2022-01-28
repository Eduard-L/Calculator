

const numsBtn = document.querySelectorAll('.btn');
const calcInputs = document.querySelector('.calc__inputs');
const cleanScreenBtn = document.querySelector('.calc__delete');
const resultImg = document.querySelector('.giphy-embed')
const sideInputScreen = document.querySelector('.calc__screen-for-allinputs');
const equalBtn = document.querySelector('.calc__equal');


let operator = '';
let counter = 0
let secondInput = 0;
let firstInput = 0;
let solution = 0;



cleanScreenBtn.addEventListener('click', resetTheCalculator);

function cleanScreen() {
    calcInputs.textContent = '';

}
function resetTheCalculator() {
    sideInputScreen.textContent = ''
    cleanScreen();
    operator = '';
    counter = 0
    secondInput = 0;
    firstInput = 0;
    solution = 0;
}
////

numsBtn.forEach((numBtn) => {

    numBtn.addEventListener('click', () => {
        console.log(numBtn.textContent)

        sideInputScreen.textContent = sideInputScreen.textContent + numBtn.textContent

        let input = parseInt(numBtn.textContent)

        if ((typeof (input) === 'number') && (!isNaN(input))) {
            if (counter === 1) {
                calcInputs.textContent += parseInt(input);
                secondInput = parseInt(calcInputs.textContent)
                console.log(secondInput, 'second')


            }
            else {

                calcInputs.textContent += parseInt(input);
                firstInput = parseInt(calcInputs.textContent)
                console.log(firstInput, 'first')
            }

        }

        else {
            operator = numBtn.textContent;
            cleanScreen()
            console.log(operator)
            counter++
            console.log(counter)

        }
    })
});

function handleDivideOperation() {
    if (operator === '+') {

        solution = firstInput + secondInput;
        console.log(solution)
        calcInputs.textContent = solution
    }
    if (operator === 'x') {
        solution = firstInput * secondInput;
        console.log(solution)
        calcInputs.textContent = solution
    }
    if (operator === '÷') {
        solution = firstInput / secondInput;
        console.log(solution)
        calcInputs.textContent = solution
    }
    if (operator === '-') {
        solution = firstInput - secondInput;
        console.log(solution)
        calcInputs.textContent = solution
    }
    firstInput = solution;
    secondInput = 0;
    counter = 0;

}
equalBtn.addEventListener('click', () => {
    handleDivideOperation()
    sideInputScreen.textContent = sideInputScreen.textContent + equalBtn.textContent + solution;

})







