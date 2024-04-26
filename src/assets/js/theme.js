
(function($) {
    
    'use strict';
	
	// Mobile Menu
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu",
        meanMenuOpen: "<span></span> <span></span> <span></span>",
        onePage: false,
    });	

    $(document).ready(function(){ 
    // sticky menu===================
        var wind = $(window);
        var sticky = $('#sticky-header');
        wind.on('scroll', function () {
            var scroll = wind.scrollTop();
            if (scroll <100) {
                sticky.removeClass('sticky-nav');
            } else {
                sticky.addClass('sticky-nav');
            }
        });
    });

    // Loder  //
    $(function () {
      $('body').addClass('loaded');
    });

    // Script nav
        $(".team-nav").click(function(){
            $(this).siblings(".single_team_icon").toggleClass('active');
        });

     // Case Study Active
    $('.testi-list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        nav: false,
        center: false,
        margin: 20,
        navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            },
            1000: {
                items: 2
            },
            1920: {
                items: 2
            }
        }
    }) 


     // brand Active
    $('.brand-list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        nav: true,
        center: true,
        margin:20,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
             480: {
                items: 1
            },
             600: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1000: {
                items: 5
            },
            1920: {
                items: 5
            }
        }
    })   

	/*---------------------
    WOW active js 
    --------------------- */
    // new WOW().init();
    

    // counterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

	
	 // Venubox

    $('.venobox').venobox({

        numeratio: true,

        infinigall: true

    });
	/*--------------------------
     scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    })

    // accordion js
        jQuery(document).ready(function($) {
            "use strict";

            $(".accordion > li:eq(0) a").addClass("active").next().slideDown();

            $(".accordion a").click(function (j) {
                var dropDown = $(this).closest("li").find("p");

                $(this).closest(".accordion").find("p").not(dropDown).slideUp();

                if ($(this).hasClass("active")) {
                    $(this).removeClass("active");
                } else {
                    $(this).closest(".accordion").find("a.active").removeClass("active");
                    $(this).addClass("active");
                }

                dropDown.stop(false, true).slideToggle();

                j.preventDefault();
            });

        });

        //<!--jave script -->
        
        $(window).on('scroll', function () {
            var scrolled = $(window).scrollTop();
            if (scrolled > 300) $('.go-top').addClass('active');
            if (scrolled < 300) $('.go-top').removeClass('active');
        });

        $('.go-top').on('click', function () {
            $("html, body").animate({
                scrollTop: "0"
            }, 1200);
        });


        
    
})(jQuery);