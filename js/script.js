var open = false;
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    // menu function
    $("#toggle").click(function() {
        $(this).toggleClass("on");
        if (!open) {
            $(".menu").animate({
                right: "0",
            }, 200, function() {
                open = true;
            });
        } else {
            $(".menu").animate({
                right: "-=250",
            }, 200, function() {
                open = false;
            });
        }
    });
});
$("#sub").click(function() {
    $("#submenu, .menuback").slideToggle("fast", function() {});
});
$('.menuback').click(function() {
    $("#submenu, .menuback").hide();
});
$(document).ready(function() {
    var navpos = $('.navigation').offset();
    console.log(navpos.top);
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > navpos.top) {
            $('.navigation').addClass('fixed');
        } else {
            $('.navigation').removeClass('fixed');
        }
    });
});