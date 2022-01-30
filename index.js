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

deleteHsrIcon.addEventListener('click', () => {
    historyContainer.innerHTML = ''
})

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
handleDisableBtns(operators);
handleDisableBtn(zeroBtn);
handleDisableBtn(equalBtn);

cleanScreenBtn.addEventListener('click', resetTheCalculator);


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

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        if (counter === 1) {
            handleDivideOperation()

            calcInputs.textContent = solution
        }

    })
})
////

allBtn.forEach((numBtn) => {

    numBtn.addEventListener('click', () => {
        console.log(numBtn.textContent)

        sideInputScreen.textContent = sideInputScreen.textContent + numBtn.textContent

        let input = parseInt(numBtn.textContent)

        if ((typeof (input) === 'number') && (!isNaN(input))) {
            if (counter === 1) {

                calcInputs.textContent += parseInt(input);
                secondInput = parseInt(calcInputs.textContent)
                console.log(secondInput, 'second')
                handleEnableBtns(operators)
                handleEnableBtn(equalBtn);



            }
            else {

                calcInputs.textContent += parseInt(input);
                firstInput = parseInt(calcInputs.textContent)
                handleEnableBtns(operators)
                handleEnableBtn(zeroBtn);
                console.log(firstInput, 'first')
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


        }
    })
});





function handleDivideOperation() {
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
equalBtn.addEventListener('click', () => {
    handleDivideOperation()
    sideInputScreen.textContent = sideInputScreen.textContent + equalBtn.textContent + solution;
    const historyElement = templateElement.content.querySelector('.history__solution').cloneNode(true);
    console.log(historyElement)
    historyElement.textContent = sideInputScreen.textContent;
    historyContainer.appendChild(historyElement)
    sideInputScreen.textContent = solution
    handleDisableBtns(numsBtn)


})


// todo list

// handle buttons when we click button // or disable the buttons or change the variabel

// handle solution so it will be appear when we click second operation for exapmle 1+1 and if we click to some button again the user will see the solution in the screen 






