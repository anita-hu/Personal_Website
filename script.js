// loading images
$(window).on('load', function(){
    $('#loading').hide();
    $('#content').show();
});

// smooth nav scrolling
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 50
    }, 500);
});
// toggle show and hide
$(document).ready(function(){
  $("#toggle").click(function(){
    $("#more").slideToggle();
    $(this).toggleClass("expanded");

    if ($(this).hasClass("expanded")) {
        $(this).html("Show Less");
    } else {
        $(this).html("Show More");
    }
  });
});
