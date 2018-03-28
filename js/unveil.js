$(function() {
$('body').hide().fadeIn('slow');
});


$(document).ready( function() {
  $(window).scroll(function() {

    var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
        scrollPercent = (s / (d-c)).toFixed(2);

    // opacity value 0% to 100%
    $('.clear-img').css('opacity', scrollPercent);

  });
});

$(document).ready(function(){
    var $nav = $('#topnav');//Caching element
    // hide .navbar first - you can also do this in css .nav{display:none;}
    $nav.hide();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {
            // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 100) { //For dynamic effect use $nav.height() instead of '100'
                $nav.fadeIn();
            } else {
                $nav.fadeOut();
            }
        });
    });

});
