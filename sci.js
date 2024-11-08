// let displayValue = '';

// function appendToDisplay(value) {
//     displayValue += value;
//     document.getElementById('display').value = displayValue;
// }

// function clearDisplay() {
//     displayValue = '';
//     document.getElementById('display').value = '';
// }

// function calculate() {
//     try {
//         let result = eval(displayValue);
//         document.getElementById('display').value = result;
//         displayValue = '';
//     } catch (error) {
//         document.getElementById('display').value = 'Error';
//     }
// }


let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        let result = evaluateExpression(displayValue);
        document.getElementById('display').value = result;
        displayValue = '';
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function evaluateExpression(expression) {

    expression = expression.replace(/sin/g, 'Math.sin');
    expression = expression.replace(/cos/g, 'Math.cos');
    expression = expression.replace(/tan/g, 'Math.tan');


    expression = expression.replace(/log/g, 'Math.log10');


    return eval(expression);
}
