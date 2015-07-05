'use strict';

$('#yes').on('click', function(){
	$(".box").text();
	$(".box").text("いいね！");
	change('images/kai--happy.png');
});

$('#no').on('click', function(){
	$(".box").text();
	$(".box").text("戒を破らないでね");
	change('images/kai--sad.png');
});

function change(yourSrc) {
	$('img.chara').addClass('animated rotateOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$('img.chara').removeClass('animated rotateOut');
		$('img.chara').prop('src',yourSrc);
			if(yourSrc == 'images/kai--happy.png') {
				console.log('hoge')
				$('img.chara').css(
					{
						height: '187',
						marginTop: '-30px'
					}
				);
			}
		$('img.chara').addClass('animated zoomIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$('img.chara').removeClass('animated zoomIn');
		});
	});

}
