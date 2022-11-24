

(function ($) {
  "use strict";
	//FUNCIÓN DEL MENU HAMBURGUESA
  let burgerMenu = function() {
	  $('.burger').click(function(e) {
	  	$(window).scrollTop(0);
	    if(!$('.burger').hasClass('active'))
	      $('.burger').addClass('active');
	    else
	      $('.burger').removeClass('active');
	  });
  }
  burgerMenu();
//FUNCIÓN DEL MENU HAMBURGUESA

//JS PARA EL FILTRO DEL INDEX
  let siteIstotope = function() {
	let $container = $('#portfolio-grid').isotope({
	    itemSelector : '.item',
	    isFitWidth: true
	  });

	  $(window).resize(function(){
	    $container.isotope({
	      columnWidth: '.col-sm-3'
	    });
	  });
	  
	  $container.isotope({ filter: '*' });

	  $('#filters').on( 'click', 'a', function(e) {
	  	e.preventDefault();
		  let filterValue = $(this).attr('data-filter');
	    $container.isotope({ filter: filterValue });
	    $('#filters a').removeClass('active');
	    $(this).addClass('active');
	  });
  }
  $(window).on('load', function () {
    siteIstotope();
  });
//JS PARA EL FILTRO DEL INDEX

//JS PARA LOS TESTIMONIALS
  let siteOwlCarousel = function() {
  	$('.testimonial-carousel').owlCarousel({
		  center: true,
	    items: 1,
	    loop: true,
	    margin: 0,
	    autoplay: true,
	    smartSpeed: 1000,
		});
  };
  siteOwlCarousel();


})(jQuery);
//JS PARA LOS TESTIMONIALS


//JS DE ANIMACIONES AOS (fade etc...)
AOS.init({
	easing: 'ease',
	duration: 1000,
	once: true
});
