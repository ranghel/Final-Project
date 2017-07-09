$(document).ready(function(){
    $('.parallax').parallax();
});

$(document).ready(function(){
    $('.modal-trigger').leanModal();
    dismissible: true;
    closeIcon: true
    $('.close').closeModal();
});

$(".learnMore").click(function() {
    $('html, body').animate({
        scrollTop: $("#aboutHelpingHands").offset().top
    }, 900);
});

$("#logoClick").click(function() {
    $('html, body').animate({
        scrollTop: $("#page-footer").offset().top
    }, 900);
});

$(document).ready(function() {
    $('select').material_select();
});

$(".torequests").click(function() {
    $('html, body').animate({
        scrollTop: $("#requested").offset().top
    }, 900);
});

$('.datepicker').pickadate({minDate: 0});


// $('.datepicker').pickadate({
//      selectMonths: true, // Creates a dropdown to control month
//      selectYears: 15 // Creates a dropdown of 15 years to control year
//
// });