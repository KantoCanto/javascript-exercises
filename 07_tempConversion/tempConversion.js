const ftoc = function(tempf) {

  let celsius = (tempf - 32) * (5/9);
  roundedCelcius = Math.round( celsius * 10) / 10;
  console.log(celsius, roundedCelcius);
  return roundedCelcius;
};

const ctof = function(tempc) {

  let farenheit = (tempc * (9/5) + 32);
  roundedFarenheit = Math.round(farenheit * 10) / 10;
  console.log(farenheit, roundedFarenheit);
  return roundedFarenheit; 
};

// Do not edit below this line
module.exports = {
  ftoc, 
  ctof
};
