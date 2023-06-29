function convertTemperature() {
  const inputTemp = document.getElementById('inputTemp').value;
  const inputUnit = document.getElementById('inputUnit').value;
  const outputUnit = document.getElementById('outputUnit').value;
  let result;

  if (!inputTemp || isNaN(inputTemp)) {
    displayError("Please enter a valid temperature.");
    return;
  }

  if (inputUnit === outputUnit) {
    displayError("Input and output units cannot be the same.");
    return;
  }

  switch (inputUnit) {
    case "celsius":
      result = convertFromCelsius(parseFloat(inputTemp), outputUnit);
      break;
    case "fahrenheit":
      result = convertFromFahrenheit(parseFloat(inputTemp), outputUnit);
      break;
    case "kelvin":
      result = convertFromKelvin(parseFloat(inputTemp), outputUnit);
      break;
    default:
      displayError("Invalid input unit.");
      return;
  }

  if (isNaN(result)) {
    displayError("Conversion failed. Please check your units.");
  } else {
    displayResult(result.toFixed(2), inputTemp, inputUnit, outputUnit);
  }
}

function convertFromCelsius(temp, outputUnit) {
  switch (outputUnit) {
    case "fahrenheit":
      return (temp * 9/5) + 32;
    case "kelvin":
      return temp + 273.15;
    default:
      return temp;
  }
}

function convertFromFahrenheit(temp, outputUnit) {
  switch (outputUnit) {
    case "celsius":
      return (temp - 32) * 5/9;
    case "kelvin":
      return (temp - 32) * 5/9 + 273.15;
    default:
      return temp;
  }
}

function convertFromKelvin(temp, outputUnit) {
  switch (outputUnit) {
    case "celsius":
      return temp - 273.15;
    case "fahrenheit":
      return (temp - 273.15) * 9/5 + 32;
    default:
      return temp;
  }
}

function clearFields() {
  document.getElementById('inputTemp').value = '';
  document.getElementById('inputUnit').selectedIndex = 0;
  document.getElementById('outputUnit').selectedIndex = 0;
  document.getElementById('result').textContent = '';
  clearError();
}


function displayResult(result, inputTemp, inputUnit, outputUnit) {
  document.getElementById('result').textContent = `${inputTemp} ${inputUnit} = ${result} ${outputUnit}`;
  clearError();
}


function displayError(errorMessage) {
  document.getElementById('result').textContent = '';
  document.getElementById('error').textContent = `Error: ${errorMessage}`;
}

function clearError() {
  document.getElementById('error').textContent = '';
}
