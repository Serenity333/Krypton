$(document).ready(function() {
    $('#ball').click(function() {
        $('#ball').slideUp("slow");
    });
    $('#ballb').click(function() {
        $('#ballb').bounce({time:5}, 1000);
    });
    $('#ballc').click(function() {
        $('#ballc').bounce({time:3}, 500);
    });
    $('#balld').click(function() {
        $('#balld').slideDown("fast");
    });
   });
