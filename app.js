/*
Author: Thomas Weir
Title: JavaScriptProgrammingHomework3
Description: MPG
*/
var errors = new Array();
errors.email = null;
errors.cemail = null;
errors.password = null;
errors.cpassword = null;
errors.username = null;
/** 
* @description Check if value is numeric
* @param {number} input1
* @param {number} input2
*/
function isValidNumeric()
{
    if (input1.isInteger() || input2.isInteger())
    {
        return true;
    }
    else
    {
        return false;
    }
}
function clickHandler()
{
    const input1 = parseFloat(document.getElementById('txtMiles').value);
    const input2 = parseFloat(document.getElementById('txtGallons').value);
    const target1 = document.getElementById('answer');
    const target2 = document.getElementById('answer');
    target1.innerHTML = input1.value;
    target2.innerHTML = input2.value;
    if ((isValidNumeric = true) && (input1 > 0) && (isValidNumeric = true) && (input2 > 0))
    {
        document.getElementById("answer").innerHTML = 'Miles travelled: ' + input1 + ' Gallons consumed: ' + input2 + ' Consumption rate: ' + (input1/input2);
    }
    else
    {
        errors.push(input1);
        errors.push(input2);
        document.getElementById("answer").innerHTML = 'One or more invalid inputs.';
    }
}
button.addEventListener('click', clickHandler);
document.getElementById('btnCalculate').addEventListener('click')
