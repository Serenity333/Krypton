$(document).ready(function() {
    $('#ball').click(function () {
        $('#ball').fadeOut('fast');
    });
    
    $('#ball').hover(function() {
        $('#ball').addClass('red');
    });
    
});
