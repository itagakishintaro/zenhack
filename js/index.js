'use strict';

$('#yes').on('click', function(){
	$(".box").text();
	$(".box").text("いいね");
	change();
});

$('#no').on('click', function(){
	$(".box").text();
	$(".box").text("戒を破らないでね");
});

function change() {
	$('img.chara').addClass('animated rotateOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$('img.chara').removeClass('animated rotateOut');
		$('img.chara').prop('src','images/sad.jpg');
		$('img.chara').addClass('animated zoomIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$('img.chara').removeClass('animated zoomIn');
		});
	});

}
