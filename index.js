

const numsBtn = document.querySelectorAll('.btn');
const calcInputs = document.querySelector('.calc__inputs');
const cleanScreenBtn = document.querySelector('.calc__delete');
const resultImg = document.querySelector('.giphy-embed')
const sideInputScreen = document.querySelector('.calc__screen-for-allinputs');
const equalBtn = document.querySelector('.calc__equal');
const operators = document.querySelectorAll('.operator')
const templateElement = document.querySelector('.history-element')
const historyContainer = document.querySelector('.history');
const zeroBtn = document.querySelector('.calc__zero')


let operator = '';
let counter = 0
let secondInput = 0;
let firstInput = 0;
let solution = 0;

// function handleZerobtn() {
//     if (calcInputs.textContent === '') {
//         zeroBtn.classList.add('operator_is-disabled');
//     }
//     else {
//         zeroBtn.classList.remove('operator_is-disabled');
//     }
// }
// handleZerobtn();

function handleStartOperation() {

    operators.forEach(operator => {
        if (firstInput === 0 && secondInput === 0) {
            operator.disabled = true;
            equalBtn.disabled = true;
            operator.classList.add('operator_is-disabled');
        }
        else {
            operator.disabled = false;
            equalBtn.disabled = false;
            operator.classList.remove('operator_is-disabled');

        }
    })

}


handleStartOperation();



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
    handleStartOperation();
}

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        if (counter === 1) {
            handleDivideOperation()

            calcInputs.textContent = solution
        }

    })
})
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
                // handleDivideOperation();
                handleStartOperation();
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
    // sideInputScreen.textContent = solution;
    const historyElement = templateElement.content.querySelector('.history__solution').cloneNode(true);
    console.log(historyElement)
    historyElement.textContent = sideInputScreen.textContent;
    historyContainer.appendChild(historyElement)
    sideInputScreen.textContent = solution


})


// todo list

// handle zero when the screen is empty
// handle operators when we click operator // or disable the operators or change the variabel
// handle the solution // the solution cant be modified after we pres equal
// handle solution so it will be appear when we click second operation for exapmle 1+1 and if we click to some operator again the user will see the solution in the screen 






