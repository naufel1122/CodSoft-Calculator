let display = document.getElementById('display');

function appendToDisplay(value) {
    if (display.textContent === '0' && value !== '.') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function appendOperator(operator) {
    if (display.textContent.slice(-1).match(/[+\-*/%]/)) {
        display.textContent = display.textContent.slice(0, -1) + operator;
    } else {
        display.textContent += operator;
    }
}

function appendDot() {
    if (!display.textContent.includes('.')) {
        display.textContent += '.';
    }
}

function clearDisplay() {
    display.textContent = '0';
}

function toggleSign() {
    display.textContent = (parseFloat(display.textContent) * -1).toString();
}

function calculate() {
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = 'Error';
    }
}