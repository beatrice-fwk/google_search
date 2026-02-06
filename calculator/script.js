const display = document.getElementById('display');

function appendNumber(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';

}

function calculate() {
    try { 
        display.value = eval(display.value);//evaluates the operation that is in the display and returns the result
    } catch (error) {
        display.value = 'Error';
    }
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}
