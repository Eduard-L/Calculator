class Calculator {
    constructor(solution, input) {
        this.solution = solution;
        this.input = input;
    }
    handleFirstoOperation() {
        this.solution = this.input
    }

    handlePlusOperation() {
        this.solution = +this.input;
        return this.solution
    }
    handleSubtractOperation() {

        this.solution = this.solution - this.input;
        return this.solution
    }
    handleMultiplyOperation() {

        this.solution = this.solution * this.input
        return this.solution
    }

    handleDivideOperation() {
        this.solution = this.solution / this.input
        return this.solution
    }
    handleEqual() {



    }


}
export { Calculator }
