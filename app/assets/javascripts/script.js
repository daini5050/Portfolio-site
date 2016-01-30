$(document).ready(function() {

	$('.navicon').on('click', function() {
		if($('nav').css('display') === 'none'){
	        $('nav').slideToggle('slow');
	        $('.navicon').children('.fa').removeClass('fa-bars').addClass('fa-close');
    	} else {
	        $('nav').slideToggle('slow');
	        $('.navicon').children('.fa').removeClass('fa-close').addClass('fa-bars');
    	}
	});
	var nav = $('nav');
	$(window).resize(function(){

            var width = $(window).width();

            if (width > 630 && nav.is(':hidden')){

                nav.removeAttr('style');

            }

    });

	var ypos, box;
    function parallex() {
    	ypos = window.pageYOffset;
    	box = document.getElementById('box');

    	box.style.top = ypos * .1 + 'px';
    }
    window.addEventListener('scroll', parallex);

});