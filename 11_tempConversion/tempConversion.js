const convertToCelsius = function (tempFahrenheit) {
  let degreesCelsius = (5 / 9) * (tempFahrenheit - 32);
  roundDegreesCelsius = Math.round(degreesCelsius * 10) / 10;
  return roundDegreesCelsius;
};

const convertToFahrenheit = function (tempCelsius) {
  let degreesFahrenheit = (9 / 5) * tempCelsius + 32;
  roundDegreesFahrenheit = Math.round(degreesFahrenheit * 10) / 10;
  return roundDegreesFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
