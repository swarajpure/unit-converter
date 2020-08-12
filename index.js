const display = () => {
    const units = {
        "km": {
        "km": 1,
        "m": 1000,
        "cm": 100000
        },
        "m": {
        "km": 0.001,
        "m": 1,
        "cm": 100
        }
}

const convertFrom = document.querySelector("#convertFrom");
const convertFromUnit = convertFrom.options[convertFrom.selectedIndex].text;
const convertFromUnitValue = parseInt(convertFrom.options[convertFrom.selectedIndex].value, 10);

const convertTo = document.querySelector("#convertTo");
const convertToUnit = convertTo.options[convertTo.selectedIndex].text;
const convertToUnitValue = parseInt(convertTo.options[convertTo.selectedIndex].value, 10);

const inputNumber = parseInt(document.querySelector("#number").value, 10);

const output = document.querySelector("#output");

if (convertFromUnitValue && convertToUnitValue && inputNumber){ 
    let outputValue = inputNumber*units[convertFromUnit][convertToUnit];
    output.innerText = outputValue;
}
else if (!inputNumber){
    output.innerText = "Please enter a valid number";
}
else if (!convertFromUnitValue){
    output.innerText = "Please choose a correct unit to convert from";
}
else if (!convertToUnitValue){
    output.innerText = "Please choose a correct unit to convert to";
}
}