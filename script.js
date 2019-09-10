// loading images
$(window).on('load', function(){
    $('#loading').hide();
    $('#content').show();
});

// intro messange change
$(function () {
  count = 0;
  messageArray = ["Mechatronics Engineering @ UWaterloo", "Machine learning and computer vision enthusiast"];
  setInterval(function () {
    count++;
    $("#change-text").fadeOut(400, function () {
      $(this).text(messageArray[count % messageArray.length]).fadeIn(400);
    });
}, 2500);
});

// smooth nav scrolling
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 50
    }, 500);
});

// toggle show and hide experiences
$(document).ready(function(){
  $("#toggle-exp").click(function(){
    $("#more-exp").slideToggle();
    $(this).toggleClass("expanded");

    if ($(this).hasClass("expanded")) {
        $(this).html("Show Less");
    } else {
        $(this).html("Show More");
    }
  });
});

// toggle show and hide projects
$(document).ready(function(){
  $("#toggle-proj").click(function(){
    $("#more-proj").slideToggle();
    $(this).toggleClass("expanded");

    if ($(this).hasClass("expanded")) {
        $(this).html("Show Less");
    } else {
        $(this).html("Show More");
    }
  });
});
