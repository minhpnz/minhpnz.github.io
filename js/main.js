new WOW().init();

(function ($) {
    "use strict";

	// //======= SITE LOADER ========//
    $(window).on('load',function() { 
	    $("#loading-galaxy").fadeOut(); 
	    // $("#loaderr").delay(1000).fadeOut("slow"); 
		// $("#canvas").delay(1000).fadeOut();
		$('#welcomeButtons').css("display","inline-block")
	});    
	// $('#canvas').on('load',function() { 
	//     $("#loading-galaxy").delay(400).fadeOut(); 
	//     // $("#loaderr").delay(1000).fadeOut("slow"); 
	// 	// $("#canvas").delay(1000).fadeOut();
	// 	console.log('222')
	// 	$('#welcomeButtons').css("display","inline-block")
	// });
	$('#welcomeButtons').on("click", function (e) {
        e.preventDefault();
		$("#loaderr").fadeOut("slow"); 
    });

	//======= STICK HEADER ========//
	$(window).on('scroll', function() {
        if ($(window).scrollTop() >= 75) {
            $("nav").addClass("navbar-fixed-top");
			$("body").addClass("fixed-header");
			
        }
        else {
			$("nav").removeClass("navbar-fixed-top");
            return $("body").removeClass("fixed-header");
        }
    });
		


	//======= NAVBAR SMOOTH SCROLL========//
	$('.navbar-collapse ul li a').on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1000);
        $(".navbar-collapse").collapse("hide");
        e.preventDefault();
    });


	
	$('body').scrollspy({target:".navbar-collapse",offset:70})



	//======= PARALLAX BG ========//
	$('.header-area').parallax("40%", 0.2);
	$('.review-bg').parallax("10%", -0.04);



	//======= TYPED JS ========//
	$("#typed").typed({
        stringsElement: $('#typed-strings'),
        typeSpeed: 100,
        backDelay: 1000,
        loop: true,
        cursorChar:'',
        contentType: 'html',
	});


	//======= PROGRESS BAR  ========//
	$('.progress-bar-style').each(function() {
		var progress = $(this).data("progress");
		var prog_width = progress+'%';
		if (progress <= 100) {
			$(this).append('<div class="bar-inner" style="width:'+prog_width+'"><span></span></div>');
		}else{
			$(this).append('<div class="bar-inner" style="width:100%"><span></span></div>');
		}
	});



	//======= MAGNIDIC POPUP JS  ========//
	$('.work-item').magnificPopup({
		type:'inline'
    });


  	
    //======= ISOTOP FILTERING JS  ========//
    $(window).on('load',function() { 
	    var grid_container = $('.portfolio-container'),
	    	grid_item = $('.grid-item');
	    	

	     grid_container.imagesLoaded(function () {
	        grid_container.isotope({
	            itemSelector: '.grid-item',
	       		layoutMode: 'masonry'
	        });
	    });

	    $('.portfolio-filter li').on('click', function (e) {
			$('.portfolio-filter li.active').removeClass('active');
		    $(this).addClass('active');
		    var selector = $(this).attr('data-filter');
		    grid_container.isotope({
		        filter: selector
		    });
		    return false;
		    e.preventDefault();
		});
	});
	




	//======= Contact Form ========//
	// $('#contact-form').on('submit', function(e) {
	// 	var form = $(this);
	// 	var formdata = $(this).serialize();
	// 	var chack = $('#form-chack');
    //
	// 	function reset_form(){
	// 	 	$("#name").val('');
	// 		$("#email").val('');
	// 		$("#massage").val('');
	// 	}
    //
	// 	$.ajax({
	// 		url:  $(form).attr('action'),
	// 		type: 'POST',
	// 		data: formdata,
	// 		success : function(text){
	//             if (text == "success"){
	//             	$('#form-chack').fadeIn(400);
	//             	reset_form();
	//                 chack.text("Your message has been sent :)");
	//                 chack.removeClass('error');
	// 				chack.addClass('send');
	// 				$('#form-chack').fadeOut(8000);
    //
	//             } else {
	//             	$('#form-chack').fadeIn(400);
	//             	reset_form();
	//                 chack.text("Oops! something wrong.");
	// 				chack.removeClass('send');
	// 				chack.addClass('error');
	// 				$('#form-chack').fadeOut(8000);
	//             }
	//         }
	// 	});
	// 	e.preventDefault();
	// });


    $( "#contact-form" ).submit(function( event ) {
        var email = $('#email').val();
        var name = $('#name').val();
        var message = $('#message').val();
        window.open('mailto:'+ email + '?subject=' + name + '&body=' + message);
    });
	
})(jQuery); //end




