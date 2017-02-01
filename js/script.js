$(function(){

new WOW().init();

/*===============menu================*/

	var menu = $('.menu_toggle .menu');
	menu.click(function(e){
		e.preventDefault();
		menu.toggleClass('menu--active');
		$(".menu_top").toggleClass('active').find('.list_nav').addClass('animated fadeInDown').next('.login').addClass('animated fadeInUp');

	});

	if($(window).width() >= 991){
		$('.list_nav, .login').show();
		$(".menu_top").removeClass('active')
	}

/*==============height=================*/

	function heightDetect() {
		$(".header, .slide-img").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

/*=============sliders==================*/


	$('.slider_top').slick({
		infinite: true,
		slidesToShow: 1,
		arrows:false,
		autoplay:true,
		autoplaySpeed:2000,
		dots:true,
		fade:true
	});

/*=============loader=======================*/

$(window).load(function(){
	$(".loader_wrap, .loader").delay(500).fadeOut(3000);
	});


/*===============animation===================*/


});


	