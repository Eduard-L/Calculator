// variables
const allBtn = document.querySelectorAll('.btn');
const numsBtn = document.querySelectorAll('.btn_type_num');
const calcInputs = document.querySelector('.calc__inputs');
const cleanScreenBtn = document.querySelector('.calc__delete');
const resultImg = document.querySelector('.giphy-embed')
const sideInputScreen = document.querySelector('.calc__screen-for-allinputs');
const equalBtn = document.querySelector('.calc__equal');
const operators = document.querySelectorAll('.btn_type_operator')
const templateElement = document.querySelector('.history-element')
const historyContainer = document.querySelector('.history__solutions');
const zeroBtn = document.querySelector('.calc__zero');
const deleteHsrIcon = document.querySelector('.history__trash-icon');

let button = '';
let counter = 0
let secondInput = 0;
let firstInput = 0;
let solution = 0;
let operatorCounter = 0;

// handlers

function handleDisableBtn(btn) {

    btn.disabled = true;
    btn.classList.add('button_is-disabled');

}
function handleEnableBtn(btn) {
    btn.disabled = false;
    btn.classList.remove('button_is-disabled');
}

function handleDisableBtns(butsArray) {
    butsArray.forEach((btn) => {
        btn.disabled = true;
        btn.classList.add('button_is-disabled');
    })
}

function handleEnableBtns(butsArray) {
    butsArray.forEach((btn) => {
        btn.disabled = false;
        btn.classList.remove('button_is-disabled');
    })
}

function cleanScreen() {
    calcInputs.textContent = '';

}

function resetTheCalculator() {
    sideInputScreen.textContent = ''
    cleanScreen();
    button = '';
    counter = 0
    secondInput = 0;
    firstInput = 0;
    solution = 0;
    handleDisableBtns(operators)
    handleEnableBtns(numsBtn)
    handleDisableBtn(zeroBtn)
    handleDisableBtn(equalBtn)

}

function handleHistorySolution() {
    const historyElement = templateElement.content.querySelector('.history__solution').cloneNode(true);
    console.log(historyElement)
    historyElement.textContent = sideInputScreen.textContent;
    historyContainer.appendChild(historyElement)

}

function handlOperatorsClick() {

    handleOperation()
    sideInputScreen.textContent = sideInputScreen.textContent + equalBtn.textContent + solution;
    handleHistorySolution()
    sideInputScreen.textContent = solution
    handleDisableBtns(numsBtn)

}

function handleOperation() {
    if (button === '+') {

        solution = firstInput + secondInput;
        console.log(solution)
        calcInputs.textContent = solution
    }
    if (button === 'x') {
        solution = firstInput * secondInput;
        console.log(solution)
        calcInputs.textContent = solution
    }
    if (button === '÷') {
        solution = firstInput / secondInput;
        console.log(solution)
        calcInputs.textContent = solution
    }
    if (button === '-') {
        solution = firstInput - secondInput;
        console.log(solution)
        calcInputs.textContent = solution
    }
    firstInput = solution;
    secondInput = 0;
    counter = 0;


    handleDisableBtn(equalBtn);

}

handleDisableBtns(operators);
handleDisableBtn(zeroBtn);
handleDisableBtn(equalBtn);

// eventHandlers 

cleanScreenBtn.addEventListener('click', resetTheCalculator);

deleteHsrIcon.addEventListener('click', () => {
    historyContainer.innerHTML = ''
})

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        if (counter === 1) {


            handlOperatorsClick();


        }

    })
})

allBtn.forEach((numBtn) => {

    numBtn.addEventListener('click', () => {
        console.log(numBtn.textContent)

        sideInputScreen.textContent += numBtn.textContent

        let input = parseInt(numBtn.textContent)

        if ((typeof (input) === 'number') && (!isNaN(input))) {

            if (counter === 1) {

                calcInputs.textContent += parseInt(input);
                secondInput = parseInt(calcInputs.textContent)
                console.log(secondInput, 'second')
                handleEnableBtns(operators)
                handleEnableBtn(equalBtn);
                console.log(counter);

            }

            else {

                calcInputs.textContent += parseInt(input);
                firstInput = parseInt(calcInputs.textContent)
                handleEnableBtns(operators)
                handleEnableBtn(zeroBtn);
                console.log(firstInput, 'first')
                console.log(counter);


            }

        }

        else {
            button = numBtn.textContent;
            cleanScreen()
            console.log(button)
            counter++
            console.log(counter)
            handleDisableBtns(operators)
            handleEnableBtns(numsBtn)
            console.log(counter);





        }
    })
});

equalBtn.addEventListener('click', handlOperatorsClick)











