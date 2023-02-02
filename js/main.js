// slider
$(document).ready(function(){
	$('.multiple-items').slick({
		infiniti: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots:true,
		autoplay: false,
		autoplaySpeed: 300,
		centerMode: true,
		centerPadding: '0',
		arrows:false,
		adaptiveHeight: true,
		variableWidth: true,
		responsive: [
			{
			  breakpoint: 775,
			  settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '80px',
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '25px',
				slidesToShow: 1
			  }
			}
		  ]
	});
});

$('.doctors__wrapper-btn_link').on('click', function(){
	$(this).toggleClass('doctors__wrapper-btn_link--active');
	$(this).next().slideToggle('200');	
});
$(document).ready(function(){
	$('.button_one').click(function(){
		$('#button_one').slideToggle(300);      
		return false;
	});
	$('.button_two').click(function(){
		$('#button_two').slideToggle(300);      
		return false;
	});
	$('.button_three').click(function(){
		$('#button_three').slideToggle(300);      
		return false;
	});
	$('.button_four').click(function(){
		$('#button_four').slideToggle(300);      
		return false;
	});
});