//LOADER/SPINNER
$(window).bind("load", function() {

    "use strict";
    
    $(".spn_hol").fadeOut(1000);
});


//MENU APPEAR AND HIDE
$(document).ready(function() {

    "use strict";
    
    // $(window).scroll(function() {
    //
    //     "use strict";
    //
    //     if ($(window).scrollTop() > 80) {
    //         $(".navbar").css({
    //             'margin-top': '0px',
    //             'opacity': '1'
    //         })
    //         $(".navbar-nav>li>a").css({
    //             'padding-top': '15px'
    //         });
    //         $(".navbar-brand img").css({
    //             'height': '35px'
    //         });
    //         $(".navbar-brand img").css({
    //             'padding-top': '0px'
    //         });
    //         $(".navbar-default").css({
    //             'background-color': 'rgba(59, 59, 59, 0.7)'
    //         });
    //     } else {
    //         $(".navbar").css({
    //             'margin-top': '-100px',
    //             'opacity': '0'
    //         })
    //         $(".navbar-nav>li>a").css({
    //             'padding-top': '45px'
    //         });
    //         $(".navbar-brand img").css({
    //             'height': '45px'
    //         });
    //         $(".navbar-brand img").css({
    //             'padding-top': '20px'
    //         });
    //         $(".navbar-default").css({
    //             'background-color': 'rgba(59, 59, 59, 0)'
    //         });
    //     }
    // });
});




 // MENU SECTION ACTIVE
$(document).ready(function() {

    "use strict";
    
    $(".navbar-nav li a").click(function() {

        "use strict";
        
        $(".navbar-nav li a").parent().removeClass("active");
        $(this).parent().addClass("active");
    });
});



// Hilight MENU on SCROLl

$(document).ready(function() {

    "use strict";
    
    $(window).scroll(function() {

        "use strict";
        
        $(".page").each(function() {

            "use strict";
            
            var bb = $(this).attr("id");
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 70;
            if ($(window).scrollTop() > grttop - 1 && $(window).scrollTop() < grttop + hei - 1) {
                var uu = $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");
            } else {
                var uu = $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");
            }
        });
    });
});



//SMOOTH MENU SCROOL


$(function() {
	
	"use strict";

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



// FIX HOME SCREEN HEIGHT
// $(document).ready(function() {
//
//     "use strict";
//
//     setInterval(function() {
//
//         "use strict";
//
//         var widnowHeight = $(window).height();
//         var containerHeight = $(".home-container").height();
//         var padTop = widnowHeight - containerHeight;
//         $(".home-container").css({
//             'padding-top': Math.round(padTop / 2) + 'px',
//             'padding-bottom': Math.round(padTop / 2) + 'px'
//         });
//     }, 10)
// });



//PARALLAX
$(document).ready(function() {

    "use strict";
    
    $(window).bind('load', function() {
        "use strict";
        parallaxInit();
    });

    function parallaxInit() {
        "use strict";
        $('.home-parallax').parallax("30%", 0.1);
        $('.subscribe-parallax').parallax("30%", 0.1);
        $('.testimonial').parallax("10%", 1);
        /*add as necessary*/
    }
});



//OWL CAROSEL
$(document).ready(function() {

    "use strict";
    
    $("#owl-demo").owlCarousel({
        autoPlay: 3000,
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [1370, 3], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 2], // betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0
    });
});

$('.go-to-arrow').click(function (e) {
    e.preventDefault();

    var goTo = $(this).attr('href'),
        scrollTo = $(goTo).offset();

    $('html,body').animate({ scrollTop: scrollTo.top }, 400);
});
    
 //PRETTYPHOTO

$(document).ready(function() {

    "use strict";

    $("a[rel^='prettyPhoto']").prettyPhoto({
        show_title: false,
        /* true/false */
    });
});



//WOW JS
$(document).ready(function() {

    "use strict";
 
    new WOW().init();
});



//RESPONSIVE VIDEO
$(document).ready(function() {

    "use strict";
    
    // Basic FitVids Test
    $(".video").fitVids();
});



//CONTACT FORM VALIDATION
$(document).ready(function() {

    "use strict";
    
    $(".form_submit").click(function() {

        "use strict";
        
        var name = $("#name").val();
        var emaild = $("#email").val();
        var subject = $("#subject").val();
        var message = $("#message").val();
        var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        if (!name) {
            $(".form_error .name_error").addClass("show").removeClass("hide");
            return false;
        } else {
            $(".form_error .name_error").addClass("hide").removeClass("show");
        }
        if (!emaild) {
            $(".form_error .email_error").addClass("show").removeClass("hide");
            return false;
        } else {
            $(".form_error .email_error").addClass("hide").removeClass("show");
            if (testEmail.test(emaild)) {
                $(".form_error .email_val_error").addClass("hide").removeClass("show");
            } else {
                $(".form_error .email_val_error").addClass("show").removeClass("hide");
                return false;
            }
        }
        if (!message) {
            $(".form_error .message_error").addClass("show").removeClass("hide");
            return false;
        } else {
            $(".form_error .message_error").addClass("hide").removeClass("show");
        }
        if (name && emaild && message) {
            $.ajax({
                url: 'contact.php',
                data: {
                    name: name,
                    emaild: emaild,
                    subject: subject,
                    message: message
                },
                type: 'POST',
                success: function(data) {
                    $(".Sucess").show();
                    $(".Sucess").fadeIn(2000);
                    $(".Sucess").html("<i class='fa fa-check'></i> <b>" + name + "</b>, спасибо за обращение, наш менеджер в ближайшее время с вами свяжется!");
                    $("#Name").val("");
                    $("#Email").val("");
                    $("#Subject").val("");
                    $("#Message").val("");
                    $(".form_error .name_error, .form_error .email_error, .form_error .email_val_error, .form_error .message_error").addClass("hide").removeClass("show");
                    $("#name").val("");
                    $("#email").val("");
                    $("#subject").val("");
                    $("#message").val("");
                }
            });
        }
        return false;
    });
});


 
/// SMOOTH SCROLL           

$(document).ready(function() {

    "use strict";
    
    var scrollAnimationTime = 1200,
        scrollAnimation = 'easeInOutExpo';
    $('a.scrollto').bind('click.smoothscroll', function(event) {
        event.preventDefault();
        var target = this.hash;
        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top
        }, scrollAnimationTime, scrollAnimation, function() {
            window.location.hash = target;
        });
    });
    //COUNTER
    $('.counter_num').counterUp({
        delay: 10,
        time: 2000
    });
});






// //VIDEO BACKGROUND
// $(document).ready(function() {
//   var videobackground = new $.backgroundVideo($('body'), {
//     "align": "centerXY",
//     "width": 1280,
//     "height": 720,
//     "path": "media/",
//     "filename": "cloud",
//     "types": ["mp4","ogg","webm"]
//   });
// });


// CALCULATOR

$(document).ready(function() {

    $('.calc-button').on('click', calcOpen);
    $('.calc_popup_close').on('click', calcClose);
    $('.overlay').on('click', calcClose);

    $(".calc_popup_input").on("keyup", function(e) {
        var _this = $(this),
                form = _this.closest(".calc_popup_form"),
                container = form.closest(".calk_popup_content"),
                resultOutput = container.find(".calc_popup_form_result_numb_"),
                a = parseFloat( form.find("#tile_length_input").val() ),
                b = parseFloat( form.find("#tile_width_input").val() ),
                c = parseFloat( form.find("#tile_thickness_input").val() ),
                d = parseFloat( form.find("#tile_width_seam_input").val() ),
                e = parseFloat( form.find("#tile_calculated_area_input").val() ),
                formula = 0;

        if ( isNaN(a) === true || isNaN(b) === true || isNaN(c) === true || isNaN(d) === true || isNaN(e) === true ) {
            formula = 0;
        } else {
            formula = ( (a + b)/(a * b) ) * c * d * 1.6 * e;
        }

        resultOutput.empty().text( formula.toFixed(2) );

    });

    function calcClose(e) {
        e.preventDefault();
        e.stopPropagation();
        $('#calc_popup').removeClass('open');
        $('.overlay').fadeOut(300);
    }
    
    function calcOpen(e) {
        e.preventDefault();
        e.stopPropagation();
        $('#calc_popup').addClass('open');
        $('.overlay').fadeIn(300);
    }

});