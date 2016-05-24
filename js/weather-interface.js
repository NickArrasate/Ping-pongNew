var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $('#weatherLocation').click(function(){
  var city = $('#location').val();
  $('#location').val('');
  $('.showWeather').text('Here is the weather for' + city + '.')
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
  $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });;
});
});
