let string1 = ''
let string2 = ''
let string3 = ''
let display = document.getElementById('display')
function addToDisplay(number) {
    // number1 = display.value
    // display.value = number1 + number;
    display.value += number;
}

function plus() {
    display.value += '+';
}
function minus() {
    display.value += '-';
}
function multiply() {
    display.value += '*';
}
function divide() {
    display.value += '/';
}
function decimal() {
    display.value += '.';
}
 
function calculate(num1,num2) {
  string1=document.getElementById('display').value
  // console.log(string1)
    // Split the string by operators
    // const parts = string1.split('/[+\-*/]/');
  
    // Loop through the parts to find the operator
    for (let i = 0; i < string1.length; i++) {
      let char = string1.charAt(i);
      if (char == '+' || char == '-' || char == '*' || char == '/') {
        let num1 = string1.slice(0,i)
        num1=Number.parseFloat(num1)
        let num2 =string1.slice(i+1)
        num2=Number.parseFloat(num2)
        // console.log(num1)
        // console.log(num2)
        let result;
        // Perform the operation based on the operator
        switch (char) {
          case '+':
            result = num1 + num2;
            break;
          case '-':
            result = num1 - num2;
            break;
          case '*':
            result = num1 * num2;
            break;
          case '/':
            result = num1 / num2;
            break;
          default:
            display.value='No Operator found'
            return;
        }
        // console.log(`Result: ${result}`);
        display.value=result
        return;
      }
    }
    console.log('No operator found');
  }

function clearDisplay() {
    display.value = '';
}

function clearOneDigit() {
    let currentValue = display.value
    let length = currentValue.length
    display.value = currentValue.slice(0, length - 1);
}
