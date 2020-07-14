$(document).ready(function() {
    $(document).mousemove(function(event) {
        $('p').css({ 'padding-top': event.pageX, 'padding-left': event.pageY })
    });
});