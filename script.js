const tempInput = document.getElementById('temp-input');
const unitSelect = document.getElementById('unit-select');
const convertToSelect = document.getElementById('convert-to-select');
const convertBtn = document.getElementById('convert-btn');
const resultDiv = document.getElementById('result');

convertBtn.addEventListener('click', function(event) {
  event.preventDefault();
  convertTemperature();
});

function convertTemperature() {
  const tempValue = parseFloat(tempInput.value);
  const fromUnit = unitSelect.value;
  const toUnit = convertToSelect.value;

  if (isNaN(tempValue)) {
    alert('Please enter a valid temperature value');
    return;
  }

  let convertedTemp;

  switch (fromUnit) {
    case 'celsius':
      switch (toUnit) {
        case 'fahrenheit':
          convertedTemp = (tempValue * 9/5) + 32;
          break;
        case 'kelvin':
          convertedTemp = tempValue + 273.15;
          break;
        default:
          convertedTemp = tempValue;
      }
      break;
    case 'fahrenheit':
      switch (toUnit) {
        case 'celsius':
          convertedTemp = (tempValue - 32) * 5/9;
          break;
        case 'kelvin':
          convertedTemp = (tempValue - 32) * 5/9 + 273.15;
          break;
        default:
          convertedTemp = tempValue;
      }
      break;
    case 'kelvin':
      switch (toUnit) {
        case 'celsius':
          convertedTemp = tempValue - 273.15;
          break;
        case 'fahrenheit':
          convertedTemp = (tempValue - 273.15) * 9/5 + 32;
          break;
        default:
          convertedTemp = tempValue;
      }
      break;
  }

  let unitSymbol;
  switch (toUnit) {
    case 'celsius':
      unitSymbol = '°C';
      break;
    case 'fahrenheit':
      unitSymbol = '°F';
      break;
    case 'kelvin':
      unitSymbol = 'K';
      break;
  }

  resultDiv.innerHTML = `The converted temperature is ${convertedTemp.toFixed(2)} ${unitSymbol}`;
}