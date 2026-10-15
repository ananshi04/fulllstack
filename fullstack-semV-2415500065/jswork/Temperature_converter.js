let celsiusInput = document.getElementById("celsius");
let result = document.getElementById("result");

function convertToFahrenheit() {
    let celsius = parseFloat(celsiusInput.value);
    if (isNaN(celsius)) {
        result.textContent = "Please enter a valid number";
        return;
    }
    let fahrenheit = (celsius * 9/5) + 32;
    result.textContent = celsius + "°C is equal to " + fahrenheit + "°F";
}
