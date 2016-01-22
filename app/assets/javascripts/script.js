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

	var win = $(window),
	foo = $('#typer');
	foo.typer(['I enjoy building everything from small business sites', 'to rich interactive web apps.', 'If you are a business seeking a web presence', 'or an employer looking to hire,', 'you can get in touch with me here.']);
});