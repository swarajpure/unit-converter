const init = () => {
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
        },
        "cm": {
            "cm": 1,
            "m": 0.01,
            "km": 0.00001
        }
    }
    const output = document.querySelector("#output");
    const convertFrom = document.querySelector("#convertFrom");
    const convertTo = document.querySelector("#convertTo");

    return { units, output, convertFrom, convertTo };
}

const getValues = () => {
    const { units, output, convertFrom, convertTo } = init();

    const convertFromUnit = convertFrom.options[convertFrom.selectedIndex].text;
    const convertFromUnitValue = parseInt(convertFrom.options[convertFrom.selectedIndex].value, 10);

    const convertToUnit = convertTo.options[convertTo.selectedIndex].text;
    const convertToUnitValue = parseInt(convertTo.options[convertTo.selectedIndex].value, 10);

    const inputNumber = parseInt(document.querySelector("#number").value, 10);

    return { convertFromUnit, convertFromUnitValue, convertToUnit, convertToUnitValue, inputNumber, units } ;
}

const calculate = () => {
    const { units, convertFromUnit, convertFromUnitValue, convertToUnit, convertToUnitValue, inputNumber } = getValues();
    let outputMessage;
    if (convertFromUnitValue && convertToUnitValue && inputNumber){ 
        let outputValue = inputNumber*units[convertFromUnit][convertToUnit];
        outputMessage = outputValue;
    }
    else if (!inputNumber){
        outputMessage = "Please enter a valid number";
    }
    else if (!convertFromUnitValue){
        outputMessage = "Please choose a correct unit to convert from";
    }
    else if (!convertToUnitValue){
        outputMessage = "Please choose a correct unit to convert to";
    }
    return outputMessage;
}

const display = () => {
    const outputMessage = calculate();
    output.innerText = outputMessage;
}