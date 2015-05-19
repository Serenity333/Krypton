$(document).ready(function() {
    $('#ball').click(function() {
        $('#ball').effect('slide');
    });
    $('#ball2').click(function() {
        $('#ball2').effect('bounce', {time:5}, 1000);
    });
    $('#ball3').click(function() {
        $('#ball3').effect('bounce', {time:3}, 500);
    });
    $('#ball4').click(function() {
        $('#ball4').effect('slide');
    });
   });
