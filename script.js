$(document).ready(function() {
    $('#ball').click(function() {
        $('#ball').toggle("bounce", {times:5}, "slow");
    });
    $('#ballb').click(function() {
        $('#ballb').toggle("bounce", {time:5}, "fast");
    });
    $('#ballc').click(function() {
        $('#ballc').slideToggle("slow");
    });
    $('#balld').click(function() {
        $('#balld').slideDown("fast");
    });
   });
