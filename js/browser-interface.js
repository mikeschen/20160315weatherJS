var apiKey = require('./../.env').apiKey;
var Temp = require('./../js/temperature.js').Temp;

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {

      // DISPLAY HUMIDITY
      $('.showHumidity').text("The humidity in " + city + " is " + response.main.humidity + "%");

      // DISPLAY TEMP
      $('.showTemp').text("The temperature in Kelvins is " + response.main.temp + " degrees");
      var myTemp = new Temp();
      var myTempInFahrenheit = myTemp.fahrenheit(response.main.temp);
      $('.showFahrenheit').text("The temperature in Fahrenheit is " + myTempInFahrenheit + " degrees");
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
