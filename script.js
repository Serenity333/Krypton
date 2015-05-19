$(document).ready(function() {
    $('#ball').click(function() {
        $('#ball').fadeOut('500');
    });
    $('#ball2').click(function() {
        $('#ball2').effect('slide');
    });
    $('#ball3').click(function() {
        $('ball3').effect('bounce', {time:3}, 500);
    });
    $('#ball4').click(function() {
        $('#ball4').effect('bounce', {time:5}, 1000);
    });
   });
