$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solutions').prepend('<p>Thank you, ' + email + ' has been added to the list</p>');
  });
});
