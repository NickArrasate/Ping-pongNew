var pingPong = require('./ping-pong.js').pingPong;
var goal = prompt('What number should we pingpong up to?');
var result = pingPong(goal);
result.forEach(function(element){
  console.log(element);


})
