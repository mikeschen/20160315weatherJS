exports.Temp = function() {
};

exports.Temp.prototype.fahrenheit = function(temp) {
  return Math.round((temp - 273.15) * 1.8 + 32.00);
};
