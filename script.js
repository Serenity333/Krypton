$(document).ready(function() {
    $('#ball').click(function() {
        $('#ball').slideToggle('slow');
    });
    $('#ballb').click(function() {
        $('#ballb').slideToggle('bounce', {time:5}, 'fast');
    });
   });
