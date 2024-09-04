$(function(){
    $('#header').load('header.html');

    // Add click event to .RevealAnswer elements
    $('.RevealAnswer').click(function(){
        // Toggle the display of the corresponding .HiddenAnswer element
        $(this).siblings('.HiddenAnswer').toggleClass('max-h-screen opacity-100');
    });
});
