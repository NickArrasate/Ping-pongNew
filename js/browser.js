
$(document).ready(function(){
  $('#pingpong').submit(function(event){
    event.preventDefault();
    var goal = $('#goal').val();
    var output = pingPong(goal);
    output.forEach(function(element){
      $('#solutions').append('<li>' + element + '</li>');
    });
  });
});
