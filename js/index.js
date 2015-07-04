'use strict';

$('#yes').on('click', function(){
	change();
});

function change() {
	$('img.chara').addClass('animated rotateOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$('img.chara').removeClass('animated rotateOut');
		$('img.chara').prop('src','images/sad.jpg');
		$('img.chara').addClass('animated zoomIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$('img.chara').removeClass('animated zoomIn');
		});
	});
	

	
	// setTimeout(function(){
	// 	$('img.chara').prop('src','images/sad.jpg');
	// } , 500);
	
	// $('img.chara').stop().animate({ opacity:0, top:-100 }, 300, 'easeInBack', function() {
	// 	$(this).prop('src','images/sad.jpg').delay(500).animate({ opacity:1, top: 300 }, 300, 'easeOutBounce');
	// 	return false;	
	// });
}