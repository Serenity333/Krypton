$(document).ready(function() {
    $('#ball').click(function() {
        $('#ball').effect('slide');
    });
    $('#ballb').click(function() {
        $('#ballb').effect('bounce', {time:5}, 1000);
    });
    $('#ballc').click(function() {
        $('#ballc').effect('bounce', {time:3}, 500);
    });
    $('#balld').click(function() {
        $('#balld').effect('slide');
    });
   });
