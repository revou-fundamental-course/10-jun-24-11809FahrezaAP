document.getElementById("tempForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var temperature = parseFloat(document.getElementById("tempInput").value);
    var conversionType = document.getElementById("conversionType").value;
    var result;
    
    switch(conversionType) {
        case "celsiusToFahrenheit":
            result = (temperature * 9/5) + 32 + " °F";
            formulaCalc = " * 9/5) + 32 ";
            break;
        case "fahrenheitToCelsius":
            result = (temperature - 32) * 5/9 + " °C";
            formulaCalc = " - 32) * 5/9 ";
            break;
    }
    
    document.getElementById("conversionResult").textContent = result;
    document.getElementById("resultCalc").textContent = "(" + temperature + formulaCalc + " = "+ result; 
});